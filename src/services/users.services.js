const { Users, Cart } = require("../models");

class UserServices {
    static async create(user) {
        try {
            const result = await Users.create(user);
            const cart = Cart.create({userId: result.id})
            return result;
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = UserServices;