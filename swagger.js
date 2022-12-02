const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
              title: "E-Commerce API",
              version: "1.0.0",
              description: "API para una E-Commerce" 
          },
    },
    apis:[
        "./src/routes/users.routes.js",
        "./src/routes/order.routes.js",
        "./src/routes/products.routes.js",
        "./src/routes/cart.routes.js",
        
        "./src/models/users.models.js",
        "./src/models/products.models.js",
        "./src/models/order.models.js",
        "./src/models/cart.models.js",
        "./src/models/productInCart.models.js",
        "./src/models/productInOrder.models.js"
    ]
}

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
	app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

	console.log(`Doc V1 disponible en http://localhost:${port}/api/v1/docs`);
}

module.exports = {swaggerDocs};