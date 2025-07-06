import { connection } from "../database/conexao";
import { DataTypes, Sequelize } from "sequelize";

const Owner = connection.define('owner', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }, name: {
        type: Sequelize.STRING,
        allowNull: false
    }, email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true 
    }, cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }, phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
})

export default Owner;