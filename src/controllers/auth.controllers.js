const {AuthServices} = require("../services");

const userLogin = async (req, res, next) => {
    try{
        const credentials = req.body;
        const result = await AuthServices.authenticate(credentials);
        if(result){
            const {username, email, id } = result.result;
            const user =  {username, email, id };
            const token = AuthServices.getToken(user);
            user.token = token
            res.json({...user});
        }else{
            res.status(400).json({message:'invalid info'});
        }
    }catch(error){
        next({
            message: 'algo salio mal con la autenticacion',
            status:401,
            errorContent: error
        });
    }
}

module.exports = {userLogin};