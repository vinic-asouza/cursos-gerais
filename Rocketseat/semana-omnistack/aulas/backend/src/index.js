//IMPORTACAO DAS DEPENDENCIAS
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

//INSTANCIAR O SERVIDOR COM EXPRESS
const app = express(); 

//DIVIDIR O SERVIDOR PARA QUE SUPORTE PROTOCOLO HTTP E WEBSOCKET, QUE PERMITE O REAL TIME
const server = require('http').Server(app);
const io = require('socket.io')(server);

//CONEXAO COM O BANCO DE DADOS (MONGODB)
mongoose.connect('mongodb+srv://dbomnistack:omnistack@cluster0-b9iid.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, //Configuração de formato da string
});

//REPASSA A INFORMAÇÃO DO IO
//PERMITE UTILIZAÇÃO EM TODAS AS ROTAS
app.use((req, res, next) => {
    req.io = io;
    next();
})

//CORS PARA PERMITER QUE TODOS OS ENDEREÇOS E SERVIDORES POSSAM ACESSAR O BACKEND
app.use(cors());

//ROTA PARA ACESSAR ARQUIVOS ESTÁTICOS (NO CASO IMAGENS)
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads' , 'resized')));

//DECLARAÇÃO DO CAMINHO DAS ROTAS
app.use(require('./routes'));

//ASSOCIAR PORTA PARA O SERVIDOR
server.listen(3333); 