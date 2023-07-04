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


