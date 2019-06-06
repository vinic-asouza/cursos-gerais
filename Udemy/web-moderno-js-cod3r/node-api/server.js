const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//INICIANDO O APP
const app = express();
app.use(express.json());
app.use(cors());

//INICIANDO O DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

//ROTA
app.use('/api', require('./src/routes'));

app.listen(3001);