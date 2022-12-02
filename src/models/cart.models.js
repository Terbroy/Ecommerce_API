const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const Cart = db.define('cart', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"user_id"
    },
    totalPrice: {
        type: DataTypes.INTEGER,
        field:"total_price",
        defaultValue: 0,
    },
    status:{
        type: DataTypes.STRING,
        defaultValue: "in process"
    }
})

module.exports = Cart;