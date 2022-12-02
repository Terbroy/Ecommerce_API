const { UserServices } = require("../services");
const transporter = require("../utils/mailer");
const welcomeTemplate = require("../templates/welcome");


const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
    transporter.sendMail({
      from: "<teresabroyer2003@gmail.com>",
      to: result.email,
      subject: "Bienvenido a ChatApp",
      text: `Hola ${result.username} te has registrado en nuestra e-commerce`,
      // html: welcomeTemplate(),
    })
  } catch (error) {
    next({
        message: 'no se crear el usuario',
        status:400,
        errorContent: error
    })
  }
     
}
module.exports = {
  userRegister,
};