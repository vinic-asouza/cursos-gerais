const Post = require('../models/Post');

module.exports = {

    // Cadastrar novo Like
    async store(req, res) { 
        const post = await Post.findById(req.params.id); //Buscar o Post 
        
        post.likes += 1; // Atribuir contagem de likes

        await post.save(); // Salvar

        //EMITIR INFORMACAO EM TEMPOR REAL
        req.io.emit('like', post);

        return res.json(post) //Resposta
    }
};