const {userRoutes} = require('./userRoutes');

const {countryRoutes} = require('./countryRoutes');

const {activityRoutes} = require('./activityRoutes');

const {favoritesRoutes} = require('./favoritesRoutes');

// const router = Router();

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);


module.exports = {
    userRoutes,
    countryRoutes,
    activityRoutes,
    favoritesRoutes
}
