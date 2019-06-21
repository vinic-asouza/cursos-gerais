const TipoCliente = require('../model/tiposClientes');

exports.findOne = (request, response, next) => {
    const tcl_id = request.params.tcl_id;

    TipoCliente.findById(tcl_id)
        .then(tipo_cliente => {
            if (tipo_cliente) {
                response.send(spoiler);
            } else {
                response.status(404).send();
            }
        })
        .catch(error => next(error));
}

exports.buscarTodos = (request, reponse, next) => {
    let limite = parseInt(request.query.limite || 0);
    let pagina = parseInt(request.query.pagina || 0);

    if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
        response.status(400).send();
    }

    const ITENS_POR_PAGINA = 10;

    limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite;
    pagina = pagina <= 0 ? 0 : pagina * limite;

    TipoCliente.findAll({ limit: limite, offset: pagina })
        .then(tipos_clientes => {
            response.send(tipos_clientes);
        })
        .catch(error => next(error));
}

exports.criar = (request, response, next) => {
    const tcl_descricao = request.body.tcl_descricao

    TipoCliente.create({
        tcl_descricao: tcl_descricao
    }).then(() => {
        response.status(201).send();
    }).catch((error) => next(error))
}

exports.atualizar = (request, response, next) => {
    const tcl_id = request.params.tcl_id;

    const tcl_descricao = request.body.tcl_descricao;

    TipoCliente.findById(tcl_id)
        .then(tipos_clientes => {
            if (tipos_clientes) {
                TipoCliente.update(
                    {
                        tcl_descricao: tcl_descricao
                    },
                    { where: { tcl_id: tcl_id } }
                )
                    .then(() => {
                        response.status(200).send();
                    })
                    .catch(error => next(error));
            } else {
                response.status(404).send();
            }
        })
        .catch(error => next(error));
}

exports.excluir = (request, response, next) => {
    const tcl_id = request.param.tcl_id;

    TipoCliente.findById(tcl_id)
        .then(tipos_clientes => {
            if (tipos_clientes) {
                TipoCliente.destroy({
                    where: { tcl_id: tcl_id }
                })
                    .then(() => {
                        response.status(200).send();
                    })
                    .catch(error => next(error));
            } else {
                reponse.status(404).send();
            }
        })
        .catch(error => next(error));
}