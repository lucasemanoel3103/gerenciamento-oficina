import { connection } from "../database/conexao";
import { DataTypes, Sequelize } from "sequelize";

const Car = connection.define('car', {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    model: {
        type: Sequelize.STRING,
        allowNull: false
    },
    engine: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    plate: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    km: { 
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'owners',
            key: 'id'
        }
    },
    situation: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default Car;