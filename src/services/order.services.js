const { Products, Users, ProductInCart, Cart, Order, ProductInOrder } = require("../models");

class OrderServices {
    static async create(cartId) {
        try {
            const allProducts = await ProductInCart.findAll({where:{cartId}});
            const cart = await Cart.findOne({where:{id: cartId}});
            const order = await Order.create({
                totalPrice: cart.totalPrice,
                userId: cart.userId,
            });
            allProducts.forEach(async e => {
                const product = await Products.findOne({where:e.productId});
                const orderProducts =  ProductInOrder.create({
                    orderId: order.id,
                    productId: e.productId,
                    quantity: e.quantity,
                    price: e.price,
                });
                e.update({status:"bought"})
                product.update({availableQty: product.availableQty - e.quantity});
            })
            cart.update({status:"purchased"});
            return order

                
        } catch (error) {
            throw(error); 
        }
    }
    static async get(userId) {
        try {
            const allOrders = await Order.findAll({
                where:{userId},
                attributes: ["id","totalPrice"],
                include:[
                    {
                    model: Users,
                    as: "buyer",
                    attributes: ["username"],
                    },{
                    model: ProductInOrder,
                    as: "products",
                    attributes: ["quantity","price","status"],
                        include: {
                        model: Products,
                        as: "products",
                        attributes: ["id","name"],
                        }
                    }]
            });
            return allOrders;
        } catch (error) {
            throw(error); 
        }
    }
}
    
module.exports = OrderServices;