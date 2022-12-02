const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const Order = db.define('order', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"total_price"
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"user_id"
    },
    status:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
})

module.exports = Order;