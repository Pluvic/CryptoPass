// JS
async function hashWithSalt(password, salt) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + salt);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

document.getElementById("submitButton").addEventListener("click", async () => {
    const value = document.getElementById("userInput").value;
    const salt = document.getElementById("userSalt").value;

    const hashedValue = await hashWithSalt(value, salt);

    const output = document.getElementById("output");
    output.textContent = `Your password: ${hashedValue}`;

    const copyButton = document.getElementById("copyButton");
    copyButton.style.display = "block";
});

document.getElementById("copyButton").addEventListener("click", () => {
    const output = document.getElementById("output").textContent;
    navigator.clipboard.writeText(output).then(() => {
        alert("Copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
});
