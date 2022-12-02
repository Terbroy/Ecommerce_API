const AuthServices = require('./auth.services');
const CartServices = require('./cart.services');
const OrderServices = require('./order.services');
const ProductServices = require('./products.services');
const UserServices = require('./users.services');

module.exports = {
    UserServices,
    AuthServices,
    ProductServices,
    CartServices,
    OrderServices
}