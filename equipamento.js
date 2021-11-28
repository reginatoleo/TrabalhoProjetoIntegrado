const Sequelize = require('sequelize');
const database = require('./db');
 
const Equipamento = database.define('equipamento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    local: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: Sequelize.STRING
})
 
module.exports = Equipamento;