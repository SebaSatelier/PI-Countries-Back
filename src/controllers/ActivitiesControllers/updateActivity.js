const { Activity, Country } = require('../../db');

const updateActivity = async (req, res) => {
    const {id, name, dificulty, duration, season, image} = req.body
    const data = {name,dificulty,duration,season,image}
    try{
        if(!id || !name || !dificulty || !duration || !season) {
            return res.status(400).json('missing data to add the activity')
        }

        const activity = await Activity.findByPk(id)
        
        if(!activity) return res.status(400).json({error : 'activity not found'});

        const updateActivity = await activity.update(data,{
            where: {id: id}
        })

        if(!updateActivity) return res.status(400).json({error : 'activity cant update'});


        res.status(200).json({message: "activity update successfully"})

    }catch(error){
        return res.status(500).json({error :error.message});
    }
}

module.exports = {
    updateActivity
}