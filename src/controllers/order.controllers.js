const { OrderServices } = require("../services");
const transporter = require("../utils/mailer");
const welcomeTemplate = require("../templates/welcome");
const { Users } = require("../models");


const createOrder = async (req, res, next) => {
  try {
    const {cartId} = req.params;
    const result = await OrderServices.create(cartId);
    const user = await Users.findOne({where: {id:result.userId}})
    res.status(201).json(result);
    transporter.sendMail({
      from: "<teresabroyer2003@gmail.com>",
      to: user.email,
      subject: "Haz hecho una orden",
      text: `Hola ${user.username} has hecho una orden`,
      // html: welcomeTemplate(),
    })
  } catch (error) {
    next({
        message: 'no se pudo crear la orden',
        status:400,
        errorContent: error
    })
  }
     
}
const getOrders = async (req, res, next) => {
  try {
    const {userId} = req.params;
    const result = await OrderServices.get(userId);
    res.status(201).json(result);
  } catch (error) {
    next({
        message: 'no se pudo crear la orden',
        status:400,
        errorContent: error
    })
  }
     
}

module.exports = {
    createOrder,
    getOrders
};