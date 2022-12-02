const { DataTypes } = require("sequelize");
const db = require("../utils/database");


/**
 * @openapi
 * components:
 *   schemas:
 *     request_order:
 *       type: object
 *       properties:
 *         orderId:
 *           type: number
 *           example: 1
 *         productId:
 *           type: string
 *           example: 1
 *         quantity:
 *           type: number
 *           example: 6
 *         price:
 *           type: number
 *           example: 23000
 *         status:
 *           type: string
 *           example: purchased
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */

const ProductInOrder = db.define('productInOrder', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    orderId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"order_id"
    },
    productId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"product_id"
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    status:{
        type: DataTypes.STRING,
        defaultValue: "purchased",
    }
})

module.exports = ProductInOrder;