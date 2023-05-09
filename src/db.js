require('dotenv').config();
const { Sequelize } = require('sequelize');
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env;

//Modelos
const {userModel, countryModel, activityModel} = require('./models/index');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});


// Injectamos la conexion (sequelize) a todos los modelos

userModel(sequelize);
countryModel(sequelize);
activityModel(sequelize);
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Country, Activity } = sequelize.models;


//N:N
User.belongsToMany(Country, { through: 'favorites' }); // se crea la tabla intermedia favorites
Country.belongsToMany(User, { through: 'favorites' }); 

//N:N
Country.belongsToMany(Activity, { through: 'countryActivities' }); // se crea la tabla intermedia countryActivities
Activity.belongsToMany(Country, { through: 'countryActivities' }); 


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
