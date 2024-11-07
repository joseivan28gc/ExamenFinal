module.exports = (sequelize, Sequelize) => {

    const Juegos = sequelize.define("juego", {
        id_juego: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre_juego: {
            type: Sequelize.STRING
        },
        genero: {
            type: Sequelize.STRING
        },
        plataforma: {
            type: Sequelize.STRING
        },
        
        fecha_lanzamiento: {
            type: Sequelize.DATE
        },
        precio_alquiler:{
            type: Sequelize.FLOAT
        },
        disponibilidad: {
            type: Sequelize.BOOLEAN
        },
        fecha_alquiler:{
            type: Sequelize.DATE
        },
        fecha_devolucion:{
            type: Sequelize.DATE
        },
        nombre_cliente:{
            type: Sequelize.STRING
        },
        comentario:{
            type: Sequelize.STRING
        }
    });
    return Juegos;
};