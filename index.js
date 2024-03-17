const myObject = {
    stringProperty: "Салам, дуйно!",
    numberProperty: 42,
    booleanProperty: true,
    arrayProperty: [1, 2, 3, 4, 5],
    objectProperty: { key: "value" },
    undefinedProperty: undefined,
    nullProperty: null
};

console.log(Object.keys(myObject));

console.log(Object.values(myObject));





function milliseconds(x) {
    if (isNaN(x)) {
     return 'Tokto !';
    }
    return x * 1000;
  }
  
  console.log(milliseconds('100F'));
  
  console.log(milliseconds('1.500E+2'));
  





const number = [1, 2, 3];

for (let value of number) {
  value += 1;
  console.log(value);
}


function renderStar (length) {
    let star = '';
    for(let i = 0; i < length; i++){
        star += '*';
    }
    console.log(star);
}



const text = prompt('Hello world !')

renderStar(text.length);
console.log(`*${text}*`);
renderStar(text.length);