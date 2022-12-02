const { DataTypes } = require("sequelize");
const db = require("../utils/database");

/**
 * @openapi
 * components:
 *   schemas:
 *     request_orders:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: true
 *         totalPrice:
 *           type: number
 *           example: 3000
 *         userId:
 *           type: number
 *           example: 2
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */

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