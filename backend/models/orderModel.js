import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize

const Order = db.define('orders', {
    jenisMakanan:{
        type: DataTypes.STRING
    },
    namaMakanan:{
        type: DataTypes.STRING
    },
    quantity:{
        type: DataTypes.INTEGER
    },
    total:{
        type: DataTypes.DOUBLE
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default Order