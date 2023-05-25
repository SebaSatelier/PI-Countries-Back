const { Router } = require('express');
const { getCountries, getCountryById, getCountryByName, postCountry} = require('../controllers');

const countryRoutes = Router();

countryRoutes.get('/countries', getCountries);

countryRoutes.post('/countries', postCountry)


countryRoutes.get('/countries/name?', getCountryByName);

countryRoutes.get('/countries/:id', getCountryById);


module.exports = {
    countryRoutes
}