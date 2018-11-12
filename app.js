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
console.log('Process: ', process.argv);
console.log('Yargs: ', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Reading a note');
} else if (command === 'remove') {
    console.log('Removing a note');
} else {
    console.log('Command not recognized');
}