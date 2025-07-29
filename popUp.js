document.getElementById("submitButton").addEventListener("click", () => {
    const value = document.getElementById("userInput").value;
    const salt = document.getElementById("userSalt").value;
    
    // Hash the input value
    const hashedValue = md5(value + salt);
    // Send the hashed value to the background script

    const output = document.getElementById("output");
    output.textContent = `Your password: ${hashedValue}`;
});
