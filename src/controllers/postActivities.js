const { Activity, Country } = require('../db');

const postActivity = async (req, res) => {
    const {name,dificulty, duration, season, country} = req.body
    try{
        if(!name || !dificulty || !duration || !season || !country) {
            return res.status(400).json('faltan datos para poder agregar la actividad')
        }

        const [activity, created] = await Activity.findOrCreate({
            where: {name : name,
                    dificulty: dificulty,
                    duration: duration,
                    season: season}
            });
        
        if(!activity) return res.status(400).json({error : 'No se pudo agregar la actividad'});


        const countries = await Country.findAll({
            where: {name: country}
        })

        if (!countries || countries.length === 0) {
            return res.status(400).json({ error: 'No se encontraron los países asociados' });
        }

        const createActivity = await activity.addCountries(countries);

        // if(!createActivity) return res.status(400).json({error : 'La actividad ya existe en los paises'});
        
        res.status(200).json({message: "activity created successfully"})

    }catch(error){
        return res.status(500).json({error :error.message});
    }
}

module.exports = {
    postActivity
}