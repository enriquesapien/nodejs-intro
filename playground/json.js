var obj = {
    name: 'Enrique'
};

// convert JavaScript object into JSON string
// var stringObj = JSON.stringify(obj);

// console.log(typeof obj);
// console.log(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


// var personString = '{"id" : 1, "name" : "Enrique"}';

// // convert JSON string into JavaScript object
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

// sample JS object
var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

// Stringify JS object to save into JSON text file
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

// retrieve string from text file and convert to JS object
var noteString = fs.readFileSync('notes.json');
var noteObj = JSON.parse(noteString);

console.log(typeof noteObj);
console.log(noteObj);