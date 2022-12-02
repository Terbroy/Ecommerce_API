const { Products, Users, ProductInCart, Cart } = require("../models");

class CartServices {
    static async add(cartId, productId) {
        try {
            const containProduct = await ProductInCart.findOne({where: {cartId, productId }})
            const product = await Products.findOne({where:{id:productId}});
            const {price, availableQty, status} = product;
                if(containProduct && product.availableQty > 0){
                    if(availableQty !== containProduct.quantity){
                    const result = containProduct.update({
                        price: containProduct.price+price,
                        quantity: containProduct.quantity+1
                    });
                    return result;
                    }else{
                        return({message: 'no hay mas stock'});
                    }
                }else if (product.availableQty > 0){
                    const result = ProductInCart.create({
                        cartId,
                        productId,
                        quantity: 1,
                        price: price,
                        status: "in process"
                    })
                    return result;
                }
                
        } catch (error) {
            throw(error); 
        }
    }
    static async getProducts(id) {
        try {
            const result = await Cart.findOne({
                where: {id},
                attributes:["id", "userId", "totalPrice"],
                include:[{
                    model: ProductInCart,
                    as: "products",
                    attributes:["id", "price", "quantity", "productId"],
                    include:{
                        model: Products,
                        as: "carproduct",
                        attributes:["name", "price", "availableQty"],
                    }
                    },{
                    model: Users,
                    as: "user",
                    attributes:["username"],
                    }]
            })
            return result;
        } catch (error) {
            throw(error); 
        }
    }
}

module.exports = CartServices;