const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config.js");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: false,
    pool: dbConfig.pool
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// ✅ Import models here
db.user = require("./user.model")(sequelize, Sequelize);
// (Repeat for other models...)

module.exports = db;
