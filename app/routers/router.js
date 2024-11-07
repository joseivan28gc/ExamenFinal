const express = require('express');
const router = express.Router();

const juegosController = require('../controllers/juegoscontroller.js');

router.post('/api/juegos/create', juegosController.create);
router.get('/api/juegos/all', juegosController.retrieveAllJuegos);
router.get('/api/juegos/onebyid/:id', juegosController.getJuegoById);
router.put('/api/juegos/update/:id', juegosController.updateById);
router.delete('/api/juegos/delete/:id', juegosController.deleteById);

module.exports = router;
