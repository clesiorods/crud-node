module.exports = {
    getAll(request, response) {
        response.status(200).send({message: "Tudo deu certo"})
    }
}