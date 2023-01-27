const array = [{name: "John", age: 25}, {name: "Mary", age: 22}, {name: "Bob", age: 28}];

const newArray = [];
newArray.push(array[0].age, array[1].age, array[2].age);


let suma = newArray.reduce((a, b) => a + b, 0);

console.log(suma);