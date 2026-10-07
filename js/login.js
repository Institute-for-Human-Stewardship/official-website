modal = document.querySelector("#login-modal");
step1 = document.querySelector("div[data-step='1']");
step2 = document.querySelector("div[data-step='2']");
input = document.querySelector("dialog input");
continueBtn = document.querySelector("dialog button[command='--continue']");

input.addEventListener("input", () => {
    continueBtn.disabled = !input.checkValidity();
})

modal.addEventListener("command", ({ command }) => {
    if (command === "close") {
        input.value = "";
        step1.hidden = false;
        step2.hidden = true;
        continueBtn.disabled = true;
        return;
    }

    if (command === "--continue") {
        step1.hidden = true;
        step2.hidden = false;
    }
})