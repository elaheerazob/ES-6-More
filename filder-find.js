const number =[10,1,20,11,12,40,50,15,145,1458,1542,1547,15487,19787];
const bigNumber =number.filter(n =>n > 10);
// console.log(bigNumber);
const lowNumber =number.filter(n => n < 50);
console.log(lowNumber);

const product =[
    {name : 'phone',price : 20000,color : 'black',},
    {name : 'wath',price : 3000,color : 'yellow',},
    {name : 'mouse',price : 800,color : 'green',},
    {name : 'glass',price : 400,color : 'blue',},
    {name : 'laptop',price : 50000,color : 'silvar',}
];

const blackPhone =product.find (p => p.color =='black');
console.log(blackPhone);