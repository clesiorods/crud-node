const express = require("express");

const app = express();
const produtosRoutes = require('./api/routes/produtos');

app.use(express.json());

app.listen('8000', () => {
    console.log("Servidor rodando na porta 4002...");
})

app.use('/produtos', produtosRoutes);