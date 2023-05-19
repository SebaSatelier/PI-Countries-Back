const { Router } = require('express');

const activityRoutes = Router();

const {postActivity, getAllActivities, getActivityById} = require('../controllers');


activityRoutes.post('/activities', postActivity);

activityRoutes.get('/activities', getAllActivities);

activityRoutes.get('/activities/:id', getActivityById);


module.exports = {
    activityRoutes
}