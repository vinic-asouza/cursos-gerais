const express = require('express');
//MULTER É ULTILIZADO PARA UPLOAD E PERMITE QUE O EXPRESS ENTENDA O CORPO QUE EVIAMOS COMO REQUISICAO EM FORMATO MULTPART.FORM.DATA 
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')

const routes = new express.Router();
//CONFIGIRAÇÃO DO MULTER
const upload = multer(uploadConfig);

//ROTAS GET E POST PARA ENVIO E LISTAGEM
routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

//ROTA PARA LIKES
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;