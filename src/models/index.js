const Order = require("./order.models");
const Cart = require("./cart.models");
const Products = require("./products.models");
const ProductInCart = require("./productInCart.models");
const ProductInOrder = require("./productInOrder.models");
const Users = require("./users.models");

module.exports = {
    Users,
    Products,
    Cart,
    Order,
    ProductInCart,
    ProductInOrder,
}