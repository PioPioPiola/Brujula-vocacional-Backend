const express = require('express');
const sequelize = require('./database');
const Profession = require('./models/Profession');

const app = express();
const port = 3306;

app.use(express.json());

app.use('/profession', professionRoutes);

sequelize.sync()
  .then(() => {
    console.log("Modelos sincronizados");
  })
  .catch(err => {
    console.error("Error al sincronizar los modelos:", err);
  });

app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});