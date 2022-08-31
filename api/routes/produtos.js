const express = require('express');

const router = express.Router();

const produtosController = require('../controllers/produtos');

router.get('/', (request, response) => {
    produtosController.getAll(request, response);
})


module.exports = router;