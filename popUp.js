document.getElementById("submitButton").addEventListener("click", () => {
    const value = document.getElementById("userInput").value;
    
    // Hash the input value
    const hashedValue = btoa(value);
    // Send the hashed value to the background script

    const output = document.getElementById("output");
    output.textContent = `Your password: ${hashedValue}`;
});