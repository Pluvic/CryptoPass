document.getElementById("submitButton").addEventListener("click", () => {
    const value = document.getElementById("userInput").value;
    document.getElementById("output").textContent = value;
});