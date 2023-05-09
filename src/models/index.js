//Modularizacion de modelos, desde aquí se exporta todo haca db.


const userModel = require('./User');

const countryModel = require('./Country');

const activityModel = require('./Activity');


module.exports = {
    userModel,
    countryModel,
    activityModel
}