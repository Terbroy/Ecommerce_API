const { Router } = require("express");
const { createOrder, getOrders } = require("../controllers");
const authentication = require("../middlewares/auth.middleware");


const router = Router();

/**
 * @openapi
 * /api/v1/order/{cartId}:
 *   post:
 *     summary: Create a order in the app
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: cartId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: cart Id
 *     responses:
 *       201:
 *         description: create order
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_order"
 * /api/v1/order/{userId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: See the data of the users orders in the app
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     responses:
 *       200:
 *         description: Data displayed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_order"
 */


router.post("/order/:cartId",/*authentication,*/ createOrder);
router.get("/order/:userId", authentication, getOrders);

module.exports = router;