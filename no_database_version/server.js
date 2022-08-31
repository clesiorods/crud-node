const express = require("express");
const { ramdomUUID, randomUUID } = require("crypto");
const fs = require("fs");

const app = express();

app.use(express.json());

var products = [];


fs.readFile("products.json", "utf-8", (erro, data) => {
    if (erro) {
        console.log(erro);
    } else {
        products = JSON.parse(data);
    }
});


app.post("/products", (request, response) => {
    const { name, price } = request.body;
    const product = {
        name: name,
        price: price,
        id: randomUUID()
    };
    products.push(product)

    saveInFile();

    return response.json(product);
})


app.get("/products", (req, res) => {

    return res.json(products);
})


app.get("/product/:id", (req, res) => {
    const { id } = req.params;

    const product = products.find(product => product.id == id);
    return res.json(product);
})


app.put("/product/:id", (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const productIndex = products.findIndex(product => product.id == id);

    products[productIndex] = {
        ...products[productIndex],
        name,
        price
    }

    saveInFile();

    return res.json({ "message": "Produto alterado com sucesso" });
})



app.delete("/product/:id", (req, res) => {
    const { id } = req.params;

    const productIndex = products.findIndex(product => product.id == id);
    products.splice(productIndex, 1);

    saveInFile();

    return res.json({ "message": "Produto removido com sucesso" });
})



app.listen(4001, () => {
    // console.clear()
    console.log("Server is running at 4001...");
})


function saveInFile() {
    fs.writeFile("./products.json", JSON.stringify(products), (erro) => {
        if (erro) {
            console.log(erro)
        } else {
            console.log("Item adicionado com sucesso");
        }
    });
}