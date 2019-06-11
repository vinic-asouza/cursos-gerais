const Post = require('../models/Post');

module.exports = {
    //Listar Posts
    async index(req, res) {

    },

    // Cadastrar novo Post
    async store(req, res) {
        console.log(req.body);

        return res.json({ ok: true })
    }
};