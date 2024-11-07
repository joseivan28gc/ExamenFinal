const db = require('../config/db.config.js');
const Juegos = db.Juegos;

exports.create = (req, res) => {
    let juego = {};

    // Validaciones de los datos requeridos
    if (!req.body.nombre_juego || !req.body.genero || !req.body.plataforma) {
        return res.status(400).json({
            message: "Faltan datos requeridos (nombre_juego, genero, plataforma)"
        });
    }

    try {
        juego.nombre_juego = req.body.nombre_juego;
        juego.genero = req.body.genero;
        juego.plataforma = req.body.plataforma;
        juego.fecha_lanzamiento = req.body.fecha_lanzamiento;
        juego.precio_alquiler = req.body.precio_alquiler;
        juego.disponibilidad = req.body.disponibilidad;
        juego.fecha_alquiler = req.body.fecha_alquiler;
        juego.fecha_devolucion = req.body.fecha_devolucion;
        juego.nombre_cliente = req.body.nombre_cliente;
        juego.comentario = req.body.comentario;

        Juegos.create(juego).then(result => {
            res.status(200).json({
                message: "Juego creado exitosamente con id = " + result.id_juego,
                juego: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Fallo al crear el juego!",
            error: error.message
        });
    }
};

exports.retrieveAllJuegos = (req, res) => {
    Juegos.findAll({
        order: [
            ['nombre_juego', 'ASC'], // Ordenar por 'nombre_juego' de manera ascendente
        ]
    })
    .then(juegos => {
        res.status(200).json({
            message: "¡Juegos obtenidos exitosamente!",
            juegos: juegos
        });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: "¡Error al obtener los juegos!",
            error: error
        });
    });
};

exports.getJuegoById = (req, res) => {
    let juegoId = req.params.id;
    Juegos.findByPk(juegoId)
        .then(juego => {
            if (!juego) {
                return res.status(404).json({
                    message: "Juego no encontrado con id = " + juegoId
                });
            }
            res.status(200).json({
                message: "Juego obtenido exitosamente con id = " + juegoId,
                juego: juego
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "¡Error al obtener juego con id!",
                error: error
            });
        });
};

exports.updateById = async (req, res) => {
    try {
        let juegoId = req.params.id;
        let juego = await Juegos.findByPk(juegoId);
    
        if (!juego) {
            return res.status(404).json({
                message: "No se encontró el juego para actualizar con id = " + juegoId,
                error: "404"
            });
        } else {
            let updatedObject = {
                nombre_juego: req.body.nombre_juego,
                genero: req.body.genero,
                plataforma: req.body.plataforma,
                fecha_lanzamiento: req.body.fecha_lanzamiento,
                precio_alquiler: req.body.precio_alquiler,
                disponibilidad: req.body.disponibilidad,
                fecha_alquiler: req.body.fecha_alquiler,
                fecha_devolucion: req.body.fecha_devolucion,
                nombre_cliente: req.body.nombre_cliente,
                comentario: req.body.comentario
            };

            let result = await Juegos.update(updatedObject, { returning: true, where: { id_juego: juegoId } });
            
            if (result[0] === 0) {
                return res.status(500).json({
                    message: "No se puede actualizar un juego con id = " + req.params.id,
                    error: "No se pudo actualizar el juego",
                });
            }

            res.status(200).json({
                message: "Actualización exitosa de un juego con id = " + juegoId,
                juego: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede actualizar un juego con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deleteById = async (req, res) => {
    try {
        let juegoId = req.params.id;
        let juego = await Juegos.findByPk(juegoId);

        if (!juego) {
            return res.status(404).json({
                message: "No existe el juego con id = " + juegoId,
                error: "404",
            });
        } else {
            await juego.destroy();
            res.status(200).json({
                message: "Eliminación exitosa del juego con id = " + juegoId,
                juego: juego,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede eliminar un juego con id = " + req.params.id,
            error: error.message,
        });
    }
};
