const { Products, Users } = require("../models");

class ProductServices {
    static async getAll(offset, limit) {
        try {
            const result = await Products.findAll({
                attributes: ["id", "name", "image", "price", "availableQty"],
                include:{
                    model: Users,
                    as: "owner",
                    attributes: ["username"]
                },
                offset,
                limit,
            });
            return result;
        } catch (error) {
            throw(error); 
        }
    }
    static async create(data) {
        try {
            const result = await Products.create(data);
            return result;
        } catch (error) {
            throw(error); 
        }
    }
}

module.exports = ProductServices;