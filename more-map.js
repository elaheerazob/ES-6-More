const product =[
    {name : 'phone',price : 20000,color : 'black',},
    {name : 'wath',price : 3000,color : 'yellow',},
    {name : 'mouse',price : 800,color : 'green',},
    {name : 'glass',price : 400,color : 'blue',},
    {name : 'laptop',price : 50000,color : 'silvar',}
];

const prosuctName = product.map(p =>p.name);
console.log(prosuctName);