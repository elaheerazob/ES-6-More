//const and let var 
let name ='razob';
name='pppp';
console.log(name);

//templet String
const name1='ridwan-Elahee-razob';
const fullName=`My Name is ${name1},Im 24`;
console.log(fullName);

//arrow function
const squar=number => number * number;
const resultOfSquar=squar(10);
console.log(resultOfSquar);

//defold peramitar 
const sum =(num1,num2 = 1) => num1 + num2;
const totalSum =sum(10);
console.log(totalSum);