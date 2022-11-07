const prompt =require('prompt-sync')();

var num1=Number(prompt("Please enter a number"));
var num2=Number (prompt("Please enter a number"));


function add(){
    return num1 + num2;
}

function subtract(){
    return num1 -num2;
}
function multiply(){
    return num1*num2;

}
function division(){
    return num1/num2;
}

console.log(add());
console.log(subtract());
console.log(multiply());
console.log(division());