//---------USER CONTROLLERS---------

const {userLogin} = require('./UserControllers/userLogin');

const {userRegister} = require('./UserControllers/userRegister');

//---------COUNTRY CONTROLLERS---------

const {getCountries} = require('./CountriesControllers/getCountries');

const {getCountryById} = require('./CountriesControllers/getCountryById');

const {getCountryByName} = require('./CountriesControllers/getCountriesByName');

const {postCountry} = require('./CountriesControllers/postCountry')

//---------ACTIVITY CONTROLLERS---------

const {postActivity} = require('./ActivitiesControllers/postActivities');

const {getActivityById} = require('./ActivitiesControllers/getActivitiesById');

const {getAllActivities} = require('./ActivitiesControllers/getAllActivities');

const {deleteActivity} = require('./ActivitiesControllers/deleteActivity')

const {updateActivity} = require('./ActivitiesControllers/updateActivity')

//---------FAVORITE CONTROLLERS---------

const {getFavorites} = require('./FavoritesControllers/getFavorites');

const {addFavorites} = require('./FavoritesControllers/addFavorites');

const {removeFavorites} = require('./FavoritesControllers/removeFavorites');

module.exports = {
    userLogin,
    userRegister,
    getCountries,
    getCountryById,
    getCountryByName,
    postCountry,
    postActivity,
    getActivityById,
    getAllActivities,
    getFavorites,
    addFavorites,
    removeFavorites,
    deleteActivity,
    updateActivity
}