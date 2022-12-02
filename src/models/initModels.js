const {  
    Cart,
    Order,
    Products,
    Users,
    ProductInCart,
    ProductInOrder
} = require("./index");

const initModels = () => {

    
    Users.hasMany(Products,  {as: 'product', foreignKey:'user_id'});
    Products.belongsTo(Users, {as: 'owner', foreignKey:'user_id'});
    
    Users.hasOne(Cart, {as: 'cart', foreignKey:'user_id'});
    Cart.belongsTo(Users, {as: 'user', foreignKey:'user_id'});
    
    Users.hasMany(Order,  {as: 'order', foreignKey:'user_id'});
    Order.belongsTo(Users, {as: 'buyer', foreignKey:'user_id'});
    
    ProductInCart.belongsTo(Products, {as: 'carproduct', foreignKey:'product_id'});
    Products.hasMany(ProductInCart, {as: 'products', foreignKey:'product_id'});
    
    ProductInCart.belongsTo(Cart, {as: 'cart', foreignKey:'cart_id'});
    Cart.hasMany(ProductInCart, {as: 'products', foreignKey:'cart_id'});

    Order.hasMany(ProductInOrder, {as: 'products', foreignKey:'order_id'});
    ProductInOrder.belongsTo(Order, {as: 'order', foreignKey:'order_id'});
    
    ProductInOrder.belongsTo(Products, {as: 'products', foreignKey:'product_id'});
    Products.hasMany(ProductInOrder, {as: 'orderproduct', foreignKey:'product_id'});

}

module.exports = initModels;
