const { Cart, ProductInCart } = require("../models");
const { CartServices} = require("../services");

const addProduct = async (req, res, next) => {
    
  try {
    const { id, productId } = req.params;
    const result = await CartServices.add(id, productId);
    const allProducts = await ProductInCart.findAll({where:{cartId: id}});
    const cart = await Cart.findByPk(id);
    const sum = allProducts.reduce((acc, item) => {
        return acc += item.price; 
    },0);
    cart.update({totalPrice: sum });
    console.log(cart);
    res.status(201).json(result);
  } catch (error) {
    next({
        message: 'no se pudo obtener los productos',
        status:400,
        errorContent: error
    })
  }   
}
const getCart = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await CartServices.getProducts(id);
    res.status(201).json(result);
  } catch (error) {
    next({
        message: 'no se pudo crear los productos',
        status:400,
        errorContent: error
    })
  }   
}
module.exports = {
  addProduct,
  getCart
};