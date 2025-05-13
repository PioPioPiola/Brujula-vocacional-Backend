const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('railway', 'root', 'wvuTTYKJlLaICxABByLTTQWlMKWULZrd', {
  host: 'interchange.proxy.rlwy.net',
  port: 55305, 
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  }
});

sequelize.authenticate()
  .then(() => console.log(' Conexión establecida correctamente.'))
  .catch(err => console.error('Error al conectar con la base de datos:', err));

module.exports = sequelize;
