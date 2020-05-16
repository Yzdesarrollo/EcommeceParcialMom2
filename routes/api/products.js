const express = require('express');
const router = express.Router();
const productMocks = require('../../utils/mocks/products');

// Listar todos los productos
router.get('/', function(req, res) {
    const query = req.query; // consulta de todos los datos
    console.log('reqQuery: ' + query);
    res.status(200).json({
        data: productMocks,
        message: 'products listed'
    });
});

// Consultar un solo producto con :productId (variable parametro, la variable viene es desde los parametros)
router.get('/:productId', function(req, res) {
    const productId  = req.params.productId;
    res.status(200).json({
        data: productMocks[ productId ],
        message: 'product retrieved'
    });
});

// Crear un producto nuevo
router.post('/', function(req, res) {
    res.status(201).json({
        data: productMocks,    
        message: 'products created'
    });
});

// Actualizar
router.put('/:productId', function(req, res) {
    const productId  = req.params.productId;
    res.status(200).json({
        data: productMocks[productId],
        message: 'products updated'
    });
});
// Eliminar
router.delete('/:productId', function(req, res) {
    const  productId  = req.params.productId;
    res.status(200).json({
        data: productMocks[productId],
        message: 'products deleted'
    });
});


module.exports = router;
