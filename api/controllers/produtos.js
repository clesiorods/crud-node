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
    },


    async create(req, res) {
        const sequelize = new Sequelize('banco_teste', 'root', '', {
            host: 'localhost',
            dialect: 'mysql'
        });

        // console.log(req)
        const {nome, descricao} = req.body;

        await Produtos(sequelize, Sequelize.DataTypes).create({
            nome: nome,
            descricao: descricao
        })
        res.status(201).send({
            message: "Produto criado com sucesso"
        });
    }
}