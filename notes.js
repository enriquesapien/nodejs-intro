console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

module.exports = {
    addNote, // if equal, same as: addNote: addNote in ES6
    getAll
}