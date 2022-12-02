const { DataTypes } = require("sequelize");
const db = require("../utils/database");

/**
 * @openapi
 * components:
 *   schemas:
 *     request_product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Televisor
 *         image:
 *           type: string
 *           example: https://google.com
 *         price:
 *           type: number
 *           example: 500
 *         availableQty:
 *           type: number
 *           example: 8
 *         status:
 *           type: string
 *           example: available
 *         userId:
 *           type: number
 *           example: 1
 *     create_product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Televisor
 *         image:
 *           type: string
 *           example: https://google.com
 *         price:
 *           type: number
 *           example: 500
 *         availableQty:
 *           type: number
 *           example: 6
 *         status:
 *           type: string
 *           example: available
 *         userId:
 *           type: number
 *           example: 1
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */


const Products = db.define('products', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    image:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    availableQty:{
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"available_qty"
    },
    status:{
        type: DataTypes.STRING,
        defaultValue: "available",
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"user_id"
    }
});

module.exports = Products;