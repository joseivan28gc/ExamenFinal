const env = {
  database: 'examenfinal2', // Nombre de la base de datos
  username: 'examenfinal2_user', // Nombre de usuario
  password: 'm4er4qhn75APuRme0444S3udGLwqEfaU', // Contraseña
  host: 'dpg-cslsujd6l47c73aah2b0-a.oregon-postgres.render.com', // Host de la base de datos
  dialect: 'postgres', // Motor de la base de datos
  dialectOptions: {
      ssl: {
          require: true, // Habilita SSL
          rejectUnauthorized: false // Permite conexiones SSL sin verificación de CA
      }
  },
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
};

module.exports = env;
