const { Router } = require ('express');
const {userLogin} = require('../controllers');

const router = Router();

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Start session in the app
 *     tags: [Login]
 *     requestBody:
 *       description: Start session for do funcionalitys.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/login"
 *     responses:
 *       201:
 *         description: entering the app
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
 *                     $ref: "#/components/schemas/request_auth"
 */


router.post('/auth/login',userLogin);

module.exports= router;

