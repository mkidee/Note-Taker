// all requirements for the assignment
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const notesDB = require('./db/db.json');

const express = require('express');

const app = express();