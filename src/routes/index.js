const userRoutes = require('./users.routes');
const authRoutes = require('./auth.routes');
const productRoutes = require('./products.routes');
const cartRoutes = require('./cart.routes');
const orderRoutes = require('./order.routes');

module.exports = {
    cartRoutes,
    userRoutes,
    authRoutes,
    productRoutes,
    orderRoutes
};
