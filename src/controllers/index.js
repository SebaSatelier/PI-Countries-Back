const {userLogin} = require('./userLogin');


const {userRegister} = require('./userRegister');

const {getCountries} = require('./getCountries');

const {getCountryById} = require('./getCountryById');

const {getCountryByName} = require('./getCountriesByName');

const {postActivity} = require('./postActivities')


const {getActivity} = require('./getActivities')



module.exports = {
    userLogin,
    userRegister,
    getCountries,
    getCountryById,
    getCountryByName,
    postActivity,
    getActivity
}