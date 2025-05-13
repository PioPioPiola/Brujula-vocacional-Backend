const express = require('express');
const sequelize = require('./database');
const Profession = require('./models/Profession');

const app = express();
const port = 3306;

app.use(express.json());

sequelize.sync()
  .then(() => {
    console.log("Modelos sincronizados");
  })
  .catch(err => {
    console.error("Error al sincronizar los modelos:", err);
  });

app.get('/', (req, res) => {
  res.send('Hola desde la API');
});

app.post('/profession', async (req, res) => {
  try {
    const newProfession = await Profession.create({
      code: req.body.code, // 
      name: req.body.name,
      definition: req.body.definition,
      gen: req.body.gen,
      urlImage: req.body.urlImage,
      interests: req.body.interests,
      habilities: req.body.habilities
    });
    res.status(201).json(newProfession);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});