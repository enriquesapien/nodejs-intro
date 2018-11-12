// var obj = {
//     name: 'Enrique'
// };

// convert object into JSON string
// var stringObj = JSON.stringify(obj);

// console.log(typeof obj);
// console.log(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


var personString = '{"id" : 1, "name" : "Enrique"}';

// convert JSON string into object
var person = JSON.parse(personString);

console.log(typeof person);
console.log(person);