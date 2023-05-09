const { Router } = require('express');

const activityRoutes = Router();

const {postActivity, getActivity} = require('../controllers');


activityRoutes.post('/activities', postActivity);

activityRoutes.get('/activities', getActivity);


module.exports = {
    activityRoutes
}