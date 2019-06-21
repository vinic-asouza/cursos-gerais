const express = require('express');
const controller = require('../controller/tiposClientes');

const router = express.Router()

router.get('/tipocliente/:id', controller.findOne)

router.get('/tipocliente', controller.buscarTodos)

router.post('/tipocliente', controller.criar)

router.put('/tipocliente/:id', controller.atualizar)

router.delete('/tipocliente/:id', controller.excluir)

module.exports = router;