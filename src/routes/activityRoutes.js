const { Router } = require('express');

const activityRoutes = Router();

const {postActivity, getAllActivities, getActivityById, deleteActivity, updateActivity} = require('../controllers');


activityRoutes.post('/activities', postActivity);

activityRoutes.get('/activities', getAllActivities);

activityRoutes.get('/activities/:id', getActivityById);

activityRoutes.put('/activities', updateActivity);

activityRoutes.delete('/activities', deleteActivity);



module.exports = {
    activityRoutes
}