const { Router } = require("express");
const { getCart, addProduct } = require("../controllers");
const authentication = require("../middlewares/auth.middleware");


const router = Router();


/**
 * @openapi
 * /api/v1//cart/{id}/{productId}:
 *   post:
 *     summary: add product to cart 
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: cart Id
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: product Id
 *     responses:
 *       201:
 *         description: created product
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
 *                     $ref: "#/components/schemas/request_cart"
 * /api/v1/cart/{id}:
 *    get:
 *     summary: See the data of a cart 
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: cart Id
 *     responses:
 *       201:
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
 *                     $ref: "#/components/schemas/request_cart"
 */

router.post("/cart/:id/:productId", authentication, addProduct);
router.get("/cart/:id", authentication, getCart);

module.exports = router;