document.getElementById("submitButton").addEventListener("click", () => {
    const value = document.getElementById("userInput").value;
    const salt = document.getElementById("userSalt").value;
    
    // Hash the input value
    const hashedValue = md5(value + salt);

    // Send the hashed value to the background script
    const output = document.getElementById("output");
    output.textContent = `Your password: ${hashedValue}`;
    
    const copyButton = document.getElementById("copyButton");
    copyButton.style.display = "block"; // Show the copy button
});

document.getElementById("copyButton").addEventListener("click", () => {
    const output = document.getElementById("output").textContent;
    
    // Copy the output to clipboard
    navigator.clipboard.writeText(output).then(() => {
        alert("Copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
});