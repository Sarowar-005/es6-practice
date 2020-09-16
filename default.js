//------set default parameter in a function-----//


//Old style
 function add(num1, num2){
     if (num2 == undefined) {
         num2 = 20;
     }
     return num1 + num2;
 }
 var result = add(10);
 console.log(result);


//ES6 style
function add(num1, num2 = 50){
    return num1 + num2
}
var total = add(40);
console.log(total);











 // git remote add origin https://github.com/Sarowar-005/es6-practice.git
// git branch -M master
// git push -u origin master
