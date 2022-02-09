let res = 1;

for (let i = 1; i < 11; i++) {
    res = 2 * res;
    console.log(res);
}

let name1;
do {
    name1 = prompt("your name:");
} while (
    !isNaN(name1) || name1.length <= 1
)

alert(`Welcome ${name1}!`)

function totalPrice(billAmount, taxRate = 0.12, tipRate = 0.15) {
    return billAmount * (1 + taxRate + tipRate);
}
console.log("total price:")
console.log(totalPrice(100, undefined, 0.16));
