const db = require("../utils/database");
const { Users, Products, Cart } = require("../models");
const initModels = require("../models/initModels");

initModels();


const users = [
    {
        username: 'Maria', 
        email: 'godoy@gmail.com', 
        password: '1234', 
    },
    {
        username: 'German', 
        email: 'silva@gmail.com', 
        password: '144234', 
    },
    {
        username: 'Teresa', 
        email: 'tere@gmail.com', 
        password: '12dfgfg34', 
    },
    {
        username: 'Santiago', 
        email: 'santi@gmail.com', 
        password: '1234fgdg', 
    },
];
const products = [
    {
        name: 'Lavadora',
        image: 'https://www.google.com/',
        price: 400,
        availableQty: 2,
        userId:1,
    },
    {
        name: 'Nevera',
        image: 'https://www.google.com/',
        price: 300,
        availableQty: 6,
        userId:1,
    },
    {
        name: 'Televisor',
        image: 'https://www.google.com/',
        price: 700,
        availableQty: 0,
        userId:1,
    },
    
];
const cart = [
    {
        userId:2, 
    },
    {
        userId:3, 
    },
    {
        userId:4, 
    },
];

db.sync({force: true})
    .then(()=>{
        console.log('Sincronizando');
        users.forEach(async (e)=> await Users.create(e));
        setTimeout(() => {
            products.forEach(async (e)=> await Products.create(e));
        }, 100);
        setTimeout(() => {
            cart.forEach(async (e)=> await Cart.create(e));
        }, 200);
    })