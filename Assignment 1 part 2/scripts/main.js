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
    const displayArea = document.querySelector("#displayTimeDate");
    displayArea.innerHTML = '';
    if (selectedItem === "date") {
        displayText.innerText = currentDate;
        //displayArea.innerText = currentDate;
    } else {
        displayText.innerText = currentTime;
        //displayArea.innerText = currentTime;
    }
    //const displayArea = document.querySelector("#displayTimeDate");
    displayArea.append(displayText);
});


