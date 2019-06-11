const express = require('express'); //importar express 
const mongoose = require('mongoose'); //importar mongoose

//A função express cria um "servidor".
const app = express(); 
//Conectar o database
mongoose.connect('mongodb+srv://dbomnistack:omnistack@cluster0-b9iid.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, //Configuração de formato da string
})

app.use(require('./routes')); //Informando o caminhos das rotas

//Associar uma porta do navegador
app.listen(3333); 