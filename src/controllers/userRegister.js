const {User} = require('../db');

const {validationEmail , validationPassword} = require('../Utils/validator')


const userRegister = async (req, res) => {
    const {email, password} = req.body;
    try{
        if(!email || !password) {
            return res.status(400).json({error : "Faltan datos"})
        }
        if(!validationEmail(email) || !validationPassword(password)) {
            return res.status(400).json({error : "El email o password ingresado son incorrectos"})
        }
        const findUser = await User.findOne({
            where : {
                email : email
            }
        })

        if(findUser) {
            return res.status(400).json({error : "ya hay un usuario registrado con ese Email"})
        }

        const user = await User.create({
            email,
            password
        });

        if(!user) {
            return res.status(404).json({error: "Datos incorrectos"})
        }

        
        return res.status(200).json({user: "Usuario creado con éxito"})

    }catch(error){
        return res.status(error.errors[0].type).json({error : error.message});
    }
}

module.exports = {
    userRegister
}