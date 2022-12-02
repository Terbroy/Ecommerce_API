const { DataTypes } = require("sequelize");
const db = require("../utils/database");

/**
 * @openapi
 * components:
 *   schemas:
 *     request_cart:
 *       type: object
 *       properties:
 *         cartId:
 *           type: number
 *           example: 1
 *         productId:
 *           type: string
 *           example: 1
 *         quantity:
 *           type: number
 *           example: 3
 *         price:
 *           type: number
 *           example: 12000
 *         status:
 *           type: boolean
 *           example: true
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */

const ProductInCart = db.define('productInCart', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    cartId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"cart_id"
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
        defaultValue: "in process",
    }
})

module.exports = ProductInCart;