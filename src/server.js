const app = require('./app');
const { sequelize } = require('./db/models');

const { PORT = 3001 } = process.env;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connection has been established successfully. Listening on port ${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
});