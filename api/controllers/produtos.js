const { Sequelize } = require('sequelize');
const Produtos = require("../models/produtos");

module.exports = {
    async getAll(request, response) {
        const sequelize = new Sequelize('banco_teste', 'root', '', {
            host: 'localhost',
            dialect: 'mysql'
        });

        const produtos = await Produtos(sequelize, Sequelize.DataTypes).findAll();

        response.status(200).send({ produtos: produtos})
    }
}