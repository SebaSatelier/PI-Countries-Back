const { Router } = require('express');
const { getCountries, getCountryById, getCountryByName} = require('../controllers');

const countryRoutes = Router();

countryRoutes.get('/countries', getCountries);


countryRoutes.get('/countries/name', getCountryByName);

countryRoutes.get('/countries/:id', getCountryById);


module.exports = {
    countryRoutes
}