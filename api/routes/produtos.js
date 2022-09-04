const express = require('express');
const router = express.Router();


const produtosController = require('../controllers/produtos');


router.get('/', (request, response) => {
    produtosController.getAll(request, response);
});

router.post('/', (request, response) => {
    produtosController.create(request, response);
})

router.put('/:id', (request, response) => {
    produtosController.update(request, response);
})

module.exports = router;