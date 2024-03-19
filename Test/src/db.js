require("dotenv").config();
const { Sequelize } = require("sequelize");
const userModel = require("./models/userModel");
const taskModel = require("./models/tasksModel");
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, NODE_ENV } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos establecida con éxito.");
  })
  .catch((err) => {
    console.error("No se pudo conectar a la base de datos:", err);
  });

userModel(sequelize);
taskModel(sequelize);

const { user, tasks } = sequelize.models;

user.hasMany(tasks, { foreignKey: "userId" });
tasks.belongsTo(user, { foreignKey: "userId" });

module.exports = { sequelize, user, tasks };
