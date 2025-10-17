const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    res.send('Lista dei post');
})

router.get('/:id', function (req, res) {
    res.send('Dettagli dei post ' + req.params.id);
})

router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
})

router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
})

router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
})

router.delete('/:id', function (req, res) {
    res.send('Eliminazione post ' + req.params.id);
})

module.exports = router;