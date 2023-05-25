const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config();
const {PORT} = process.env;
const {loadCountries} = require('./src/controllers/CountriesControllers/loadCountries.js')

// Syncing all the models at once.

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server listen in port ${PORT}`); // eslint-disable-line no-console
  });
});

loadCountries();
