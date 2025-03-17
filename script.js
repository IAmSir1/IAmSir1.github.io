document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById("text-input");
    const scriptButton = document.getElementById("script-button");
    const scriptOutput = document.getElementById("script-output");

    scriptButton.addEventListener('click', function () {
        scriptOutput.textContent = inputText.value;
    });
})