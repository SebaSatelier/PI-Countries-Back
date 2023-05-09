const { Country } = require('../db');

const getCountries = async (req, res) => {
    let countries = []
    try{
        countries = await Country.findAll();

        if(!countries) return res.status(400).json({error : 'error al cargar los paises'});

        res.status(200).json(countries)

    }catch(error){
        return res.status(error.errors[0].type).json({error :error.message});
    }
}

module.exports = {
    getCountries
}