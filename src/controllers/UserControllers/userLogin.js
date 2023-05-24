const {User} = require('../../db');


const userLogin = async (req, res) => {
    const {email, password} = req.body;
    try{
        if(!email || !password) return res.status(400).json({error : "username and password are required"})

        const user = await User.findOne({ where: { email: email } });
        if(!user) {
            return res.status(404).json({error: "User not found"})
        }
        if(user.password !== password){
            return res.status(403).json({error: "wrong password"})
        }
        return res.status(200).json({access: true, userData:{id:user.id}})

    }catch(error){
        return res.status(error.errors[0].type).json({error : error.message});
    }
}

module.exports = {
    userLogin
}