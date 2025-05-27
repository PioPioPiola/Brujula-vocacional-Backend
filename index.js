const express = require('express');
const sequelize = require('./database');
const professionRoutes = require('./routes/ProfessionRoutes');
const universityRoutes = require('./routes/UniversityRoutes');
const personRoutes = require('./routes/PersonRoutes');
const careerRoutes = require('./routes/CareerRoutes');
const cors = require('cors');

const app = express();
const port = 3306;

app.use(cors());
app.use(express.json());

app.use('/Profession', professionRoutes);
app.use('/University', universityRoutes);
app.use('/Person', personRoutes);
app.use('/Career', careerRoutes);

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