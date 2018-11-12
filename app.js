console.log('starting app...');

// 3rd party modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// Local modules
const notes = require('./notes');

const argv = yargs.argv;

var command = process.argv[2];

// print the array or arguments passed from command line
console.log('Command: ', command);
console.log('Yargs: ', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.readNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}