import Sequelize from "sequelize";
import dotenv from "dotenv";
import Owner from "../models/Owner"
import Car from "../models/Car"

dotenv.config();

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'mysql'
  }
);

Owner.hasMany(Car, { foreignKey: 'ownerId' })
Car.belongsTo(Owner, { foreignKey: 'ownerId' })

connection.authenticate()
  .then(() => console.log('Conectado ao banco com Sequelize'))
  .catch(err => console.error('Erro ao conectar:', err));

export default connection;