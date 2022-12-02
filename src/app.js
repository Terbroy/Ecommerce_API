const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const { userRoutes, authRoutes, productRoutes, cartRoutes, orderRoutes } = require("./routes");
const handleError = require("./middlewares/error.middleware");
const { transporter } = require('./utils/mailer');

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


initModels();


db.authenticate()
.then(()=> console.log('autenticacion exitosa'))
.catch((error)=> console.log(error));

db.sync({force: false})
.then(()=>console.log('base de datos sincronizada'))
.catch((error)=> console.log(error));

transporter
.verify()
.then(()=>console.log("enviar correos..............."));

app.get('/', (req, res) => {
    res.status(200).json({
        status: "Respuesta exitosa",
        description: "Prueva esta API con SWAGGER en el siguiente 'link'", 
        link: process.env.HOST,
    });
})

app.use('/api/v1', userRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/v1', productRoutes);
app.use('/api/v1', cartRoutes);
app.use('/api/v1', orderRoutes);
app.use('/api/v1', handleError);

module.exports = app; 
