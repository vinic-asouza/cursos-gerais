const Sequelize = require('sequelize');
const sequelize = require('../database/database')

const TipoCliente = sequelize.define('tipos_clientes', {
    tcl_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    tcl_descricao: {
        allowNull: false,
        type: Sequelize.STRING(225),
        validate: {
            len: [2, 255]
        }
    }
})

module.exports = TipoCliente;

