const { Activity, Country } = require('../db');

const getActivity = async (req, res) => {
    const {id} = req.query
    let activities = [];

    try{
        if(!id) {
            return res.status(400).json('falta informacion para poder ver las actividades')
        }


        const country = await Country.findByPk(id,{
            include: { model: Activity, through: 'countryActivities' }
        });


        if(!country) return res.status(400).json({error : 'No se encontro pais buscado'});

        activities = await country.activities

        if(!activities) return res.status(400).json({error : 'Problemas al agregar la actividad al pais'});
        
        res.status(200).json(activities)

    }catch(error){
        return res.status(500).json({error :error.message});
    }
}

module.exports = {
    getActivity
}