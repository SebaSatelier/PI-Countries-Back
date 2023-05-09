const { Activity, Country } = require('../db');

const postActivity = async (req, res) => {
    const {name,dificulty, duration, season, countryId} = req.body
    try{
        if(!name || !dificulty || !duration || !season) {
            return res.status(400).json('faltan datos para poder agregar la actividad')
        }

        const activity = await Activity.create({
            name,
            dificulty,
            duration,
            season
        });

        if(!activity) return res.status(400).json({error : 'No se pudo agregar la actividad'});

        const country = await Country.findByPk(countryId);

        if(!country) return res.status(400).json({error : 'No se encontro pais para agregar la actividad'});

        const createActivity = await country.addActivity(activity);

        if(!createActivity) return res.status(400).json({error : 'Problemas al agregar la actividad al pais'});
        
        res.status(200).json(createActivity)

    }catch(error){
        return res.status(500).json({error :error.message});
    }
}

module.exports = {
    postActivity
}