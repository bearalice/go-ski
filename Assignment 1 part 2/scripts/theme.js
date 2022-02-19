//theme switch 

const themeButton = document.querySelector("#themeButton");
themeButton.innerText = localStorage.getItem("buttonText") ? localStorage.getItem("buttonText") : "Theme: Light";

function themeSwitch() {
    const body = document.querySelector("body");
    body.classList.toggle("themeSwitch");
}

function updateButton() {
    if (themeButton.innerText === "Theme: Dark") {
        themeButton.innerText = 'Theme: Light';
        localStorage.setItem("buttonText", "Theme: Light");
    } else {
        themeButton.innerText = 'Theme: Dark';
        localStorage.setItem("buttonText", "Theme: Dark");
    }
}

function checkTheme() {
    const body = document.querySelector("body");
    if (themeButton.innerText === "Theme: Dark") {
        body.setAttribute("class", "themeSwitch");
    }
}

themeButton.addEventListener('click', themeSwitch);
themeButton.addEventListener("click", updateButton);
checkTheme();