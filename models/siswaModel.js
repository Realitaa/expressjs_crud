import { DataTypes } from "sequelize";
import database from "../config/database.js"

export const Siswa = database.define(
    "siswa", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        freezeTableName: true,
    }
)

export default Siswa;