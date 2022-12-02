const { Router } = require("express");
const { getCart, addProduct } = require("../controllers");
const authentication = require("../middlewares/auth.middleware");


const router = Router();

// router.get("/cart", authentication, getCart);
router.post("/cart/:id/:productId", authentication, addProduct);
router.get("/cart/:id", authentication, getCart);

module.exports = router;