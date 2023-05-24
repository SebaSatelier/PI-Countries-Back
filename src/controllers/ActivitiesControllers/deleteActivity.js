const { Country, Activity } = require('../../db');

const deleteActivity = async (req, res) => {
    const {activityId, countryId} = req.body
    try{
        if(!activityId) {
            return res.status(400).json('missing data to remove activity')
        }
        if(activityId && !countryId){
            const removeData = await Activity.findByPk(activityId)
            
            if(!removeData) res.status(400).json('activity not found')

            const removeActivity = await removeData.destroy()

            if(!removeActivity) return res.status(400).json({error : 'problem to remove activity'});

            res.status(200).json({activity: "delete activity successfully"})
        }
        if(activityId && countryId){
            const removeData = await Activity.findByPk(activityId)

            const removeActivityCountry = await Country.findByPk(countryId)
            
            if(!removeData) res.status(400).json({error:'activity not found'})

            if(!removeActivityCountry) res.status(400).json({error:'country not found'})

            const removeActivity = await removeData.removeCountries(removeActivityCountry);

            if(!removeActivity) return res.status(400).json({error : 'problem to remove activity'});

            res.status(200).json({activity: "delete activity successfully"})
        }
    }catch(error){
        return res.status(500).json({error :error.message});
    }
}

module.exports = {
    deleteActivity
}