const { Country } = require('../db');

const getCountryById = async (req, res) => {
    const {id} = req.params
    try{
        if(!id) return res.status(400).json('No se encuentra el Id')

        const country = await Country.findByPk(idPais);

        if(!country) return res.status(400).json({error : 'No se encuentra el pais indicado'});
        
        res.status(200).json(country)

    }catch(error){
        return res.status(error.errors[0].type).json({error :error.message});
    }
}

module.exports = {
    getCountryById
}