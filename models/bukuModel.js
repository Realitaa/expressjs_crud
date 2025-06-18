import { DataTypes } from "sequelize";
import database from "../config/database.js";

export const Buku = database.define(
    "buku", {
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        freezeTableName: true,
    }
);

export default Buku;