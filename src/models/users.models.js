const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const bcrypt = require("bcrypt");

/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Teresa Saavedra
 *         email:
 *           type: string
 *           example: Teresa@gmail.com
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Teresa Saavedra
 *         email:
 *           type: string
 *           example: Teresa@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: Teresa@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     request_auth:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Teresa Saavedra
 *         email:
 *           type: string
 *           example: josedaniel37@gmail.com
 *         token:
 *           type: string
 *           example: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impvc2VkYW5pZWxAZ21haWwuY29tIiwiaWQiOjQsImlhdCI6"
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: Bearer
 *       bearerFormat: JWT
 */

const Users = db.define('users', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    username:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
        validate: {
            isEmail:true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false,
    },
}, {
    hooks: {
        beforeCreate: (user, options) => {
            const {password} = user;
            const hash = bcrypt.hashSync(password, 8);
            user.password = hash;
        }
    }
})

module.exports = Users;