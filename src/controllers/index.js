const { userLogin } = require('./auth.controllers');
const { addProduct, getCart } = require('./cart.controllers');
const { createOrder, getOrders } = require('./order.controllers');
const { getProducts, createProduct } = require('./products.controller');
const {getAllUsers, userRegister} = require('./users.controllers');

module.exports= {
    userRegister,
    getAllUsers,
    userLogin,
    getProducts,
    createProduct,
    addProduct, 
    getCart,
    createOrder,
    getOrders
};