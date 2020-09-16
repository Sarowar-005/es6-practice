function add(num1, num3) {
    return num1 + num3;
}

const bill = function (wifi, dish){
    const add = wifi + dish;
    const diff = wifi - dish;
    const total = add * diff;
    return total
}


// const total = function(num1, num2){
//     return num1 + num2
// }

const total = (num1, num2) => num1 * num2;
const fullName = (fName, lName) => `My full name is ${fName} ${lName}`


const eBill = (wifi, dish) => {
    const add = wifi + dish;
    const deff = wifi - dish;
    const mulltiply = add * deff;
    const totalBill = `total bill is ${mulltiply}`
    return totalBill
}


var result1 = add(20,30);
const result2 = bill(500,300);
const result3 = total(10,20);
const result4 = fullName("Sarowar", "Hosen");
const result5 = eBill(500,300);
console.log(result5);


