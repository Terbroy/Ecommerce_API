const { Router } = require("express");
const { getProducts, createProduct } = require("../controllers");
const authentication = require("../middlewares/auth.middleware");


const router = Router();

/**
 * @openapi
 * /api/v1/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       description: Create a new product for the app
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/create_product"
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
 *                     $ref: "#/components/schemas/request_product"
 * /api/v1/products:
 *   get:
 *     summary: See the data of a product in the app
 *     tags: [Products]
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
 *                     $ref: "#/components/schemas/request_product"
 */

router.get("/products", getProducts);
router.post("/products", authentication, createProduct);

module.exports = router;