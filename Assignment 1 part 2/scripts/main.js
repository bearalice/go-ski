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

//date and time display

const radioBtns = document.querySelectorAll('input[name="display"]');
const displayButton = document.querySelector("#dateTimeBtn");
// radioBtns.addEventListener("change", displayDateTime);

displayButton.addEventListener("click", () => {
    let selectedItem;
    for (const radioButton of radioBtns) {
        if (radioButton.checked) {
            selectedItem = radioButton.value;
            break;
        }
    }
    // show the output:
    let currentDate = new Date().toDateString();
    let currentTime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    let displayText = document.createElement('p');
    if (selectedItem === "date") {
        displayText.innerText = currentDate;
    } else {
        displayText.innerText = currentTime;
    }
    const displayArea = document.querySelector("#displayTimeDate");
    displayArea.append(displayText);
    displayText = '';
});
