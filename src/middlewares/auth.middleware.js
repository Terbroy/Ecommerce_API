const jwt = require('jsonwebtoken');
require("dotenv").config();

const authentication = (req, res, next) => {

    const bearerToken = req.headers.authorization;
    if(bearerToken){
       const token = bearerToken.split("Bearer ")[1];
       try {
        const decoded = jwt.verify(token, process.env.SECRET, { algorithm: "HS512" });
        next();
        } catch (error) {
        next({
            message: 'Invalid Token',
            status:400,
            errorContent: error
        })
       }
    };
};

module.exports = authentication;