//DOM Activity 1 – Update Text
function getNumber() {

    let num;
    do {
        num = prompt("give me a number: ");
    } while (isNaN(num));
    return num;
}

let radius = getNumber();
let area = radius * radius * Math.PI;
console.log(radius * radius * Math.PI);


function updateHTML() {
    const para1 = document.querySelector("#radius");
    const para2 = document.querySelector("#result");
    para1.textContent += radius;
    para2.textContent += area;
}

updateHTML();

//DOM Activity 2 – Add New Elements
let array = ["cat litter", "banana", "toast", "green"];

function addToCart(myList) {
    let cart = document.querySelector(".shopping");
    for (let i = 0; i < array.length; i++) {
        let item = document.createElement('li');
        item.textContent = array[i];
        cart.append(item);
    }
}
addToCart(array);

//DOM Activity 3 – Manipulate Styles
const listItems = document.querySelectorAll(".shopping li");


listItems.forEach(item => item.setAttribute("class", "squareList"));

for (item of listItems) {
    if (item.innerText.indexOf('green') != -1) {
        item.setAttribute("class", "green");
    }
}

//DOM Activity 4 – Event Handlers
//DOM Activity 7 – Web storage
let btn = document.querySelector("#updateImage");
btn.addEventListener('click', buttonPressed);
btn.innerText = localStorage.getItem("buttonText") ? localStorage.getItem("buttonText") : "Click Me!";


function buttonPressed() {

    if (btn.innerText === "Click Me!") {
        btn.innerText = 'Clicked!';
        localStorage.setItem("buttonText", "Clicked!");
    } else {
        btn.innerText = 'Click Me!';
        localStorage.setItem("buttonText", "Click Me!");
    }

    // if (btn.innerText == "Click Me!") {
    //     btn.innerText = "Clicked!"
    // }

    //btn.removeEventListener("click", buttonPressed); //does not print "here" anymore
    //another way to do it:
}

function updateImage() {
    console.log("Here");
    let image = document.querySelector("#shoppingCart");
    image.src = "images/shoppingCart.png"; //mind the path
    image.alt = "image of a shopping cart";
    image.width = 20;
    image.height = 20;
}
btn.addEventListener('click', updateImage, { once: true });

// let colorBtns = document.querySelectorAll(".colorBtn");

// for (let btn of colorBtns) {
//     btn.addEventListener("mouseover", updateBgColor);
// }

//DOM Activity 5 – Event Object .target
function updateBgColor(event) {
    console.log(event);
    event.target.style.backgroundColor = event.target.innerText;
    //event.target.removeEventListener("mouseover", updateBgColor);
}

//DOM Activity 6 – Bubbling phase
const btnParent = document.querySelector(".btnContainer");
btnParent.addEventListener("mouseover", updateBgColor);


const myList = document.querySelector(".shopping");
myList.addEventListener("click", strikeThru);

function strikeThru(event) {
    if (event.target.tagName == "LI") {
        event.target.innerHTML = '<del>event.target.innerText</del>';
    }
}



