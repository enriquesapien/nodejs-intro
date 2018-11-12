console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

var readNote = (title) => {
    console.log('Reading note', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

module.exports = {
    addNote, // if equal, same as: addNote: addNote in ES6
    getAll,
    readNote,
    removeNote
}