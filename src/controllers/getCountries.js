const { Country, Activity } = require('../db');

const getCountries = async (req, res) => {
    let countries = []
    try{
        countries = await Country.findAll({
            include: [
            {
                model: Activity,
                attributes: ['name'],
            }
            ]
          }); 

        if(!countries) return res.status(400).json({error : 'error loading countries'});

        res.status(200).json(countries)

    }catch(error){
        return res.status(500).json({error :error.message});
    }
}

module.exports = {
    getCountries
}