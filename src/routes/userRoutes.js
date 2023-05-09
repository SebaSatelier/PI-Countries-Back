const { Router } = require('express');
const { userLogin,userRegister} = require('../controllers')

const userRoutes = Router();

userRoutes.post('/login', userLogin);

userRoutes.post('/register', userRegister);

module.exports = {
    userRoutes
}