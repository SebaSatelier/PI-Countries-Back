const { Activity} = require('../../db');

const getActivityById = async (req, res) => {
    const {id} = req.params

    try{
        if(!id) {
            return res.status(400).json('the id is needed')
        }
        const activity = await Activity.findByPk(id)

        if(!activity) return res.status(400).json({error : 'Activity not found'});
        
        res.status(200).json(activity)

    }catch(error){
        return res.status(500).json({error :error.message});
    }
}

module.exports = {
    getActivityById
}