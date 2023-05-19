const {userLogin} = require('./userLogin');


const {userRegister} = require('./userRegister');

const {getCountries} = require('./getCountries');

const {getCountryById} = require('./getCountryById');

const {getCountryByName} = require('./getCountriesByName');

const {postActivity} = require('./postActivities')


const {getActivityById} = require('./getActivitiesById')

const {getAllActivities} = require('./getAllActivities')



module.exports = {
    userLogin,
    userRegister,
    getCountries,
    getCountryById,
    getCountryByName,
    postActivity,
    getActivityById,
    getAllActivities
}