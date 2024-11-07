const env = {
  database: 'examenfinal2',
  username: 'examenfinal2_user',
  password: 'm4er4qhn75APuRme0444S3udGLwqEfaU',
  host: 'dpg-cslsujd6l47c73aah2b0-a.oregon-postgres.render.com',
  dialect: 'postgres',
  dialectOptions: {
      ssl: {
          require: true, 
          rejectUnauthorized: false 
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
