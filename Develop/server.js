// all requirements for the assignment
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const notesDB = require('./db/db.json');

//need express, express instance 
const express = require('express');
const app = express();

//this code is for express to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

//request handling incoming:
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

//brings in JSON notes db
app.get('/api/notes', (req, res) => {
    res.json(notesDB);
});

//to handle unspecified endpoints:
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '.public/index.html'));
});

// new note objects:
function generateNote (title, text) {
    const newNote = {
        title: title,
        text: text
    };

    notesDB.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notesDB, null, 2)
    );

    return newNote;
};

//routes to handle a new note:
app.post('/api/notes', (req, res) => {
    const newNote = generateNote(req.body.title, req.body.text);
    res.json(newNote);
})

// listen for new requests:
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`)
);