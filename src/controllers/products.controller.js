const { ProductServices} = require("../services");

const getProducts = async (req, res, next) => {
    
  try {
    const offset = req.query.offset ?? 0;
    const limit = req.query.limit ?? 5;
    const allProducts = await ProductServices.getAll(offset, limit);
    const productsAvailable = [];
    allProducts.forEach(e=>{
        if(e.availableQty > 0){
            productsAvailable.push(e)
        }
    })
    res.status(201).json(productsAvailable);
  } catch (error) {
    next({
        message: 'no se pudo obtener los productos',
        status:400,
        errorContent: error
    })
  }   
}
const createProduct = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await ProductServices.create(data);
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
  getProducts,
  createProduct
};