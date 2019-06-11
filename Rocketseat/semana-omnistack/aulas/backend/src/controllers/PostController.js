const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
    //LISTAR POSTS ORDENADOS POR CREATAT (DATA DE CRIACAO)
    async index(req, res) {
       const posts = await Post.find().sort('-createAt');

       return res.json(posts);
    },

    // Cadastrar novo Post
    async store(req, res) {
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        //FORMATAR IMAGEM EM FORMATO JPG
        const [name] = image.split('.');
        const filename = `${name}.jpg`

        //REDIMENCIONAR imagem em um formato padrao
        await sharp(req.file.path)
            .resize(500, 500)
            .jpeg({ quality: 70 })
            .toFile(
                path.resolve(req.file.destination, 'resized', filename)
            )
        
        fs.unlinkSync(req.file.path) //Excluir imagem original

        //SALVAR NO BANCO DE DADOS
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: filename,
        })

        //ENVIAR INFORMACAO EM TEMPO REAL
        req.io.emit('post', post);

        return res.json(post)
    }
};