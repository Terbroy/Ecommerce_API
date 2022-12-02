const { Router } = require("express");
const { createOrder, getOrders } = require("../controllers");
const authentication = require("../middlewares/auth.middleware");


const router = Router();

router.post("/order/:cartId", authentication, createOrder);
router.get("/order/:userId", authentication, getOrders);

module.exports = router;