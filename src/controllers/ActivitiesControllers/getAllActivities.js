const { Activity} = require('../../db');

const getAllActivities= async (req, res) => {
    let activities = [];
    try{
        activities = await Activity.findAll()

        if(!activities) return res.status(400).json({error : 'Activity not found'});
        
        res.status(200).json(activities)

    }catch(error){
        return res.status(500).json({error :error.message});
    }
}

module.exports = {
    getAllActivities
}