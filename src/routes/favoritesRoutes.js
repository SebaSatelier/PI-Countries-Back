const { Router } = require('express');

const favoritesRoutes = Router();

const {addFavorites, removeFavorites, getFavorites} = require('../controllers');


favoritesRoutes.get('/fav', getFavorites);

favoritesRoutes.post('/fav', addFavorites);

favoritesRoutes.delete('/fav', removeFavorites);


module.exports = {
    favoritesRoutes
}