const { Country } = require('../db');
const { Op } = require("sequelize");

const getCountryByName = async (req, res) => {
    const {name} = req.query
    let countries = [];
    try{
        countries = await Country.findAll({
            where: {
                name : {
                    [Op.iLike] : `%${name}%`
                }
            }
        });

        if(!countries) return res.status(400).json({error : 'No se encuentra el pais indicado con ese nombre'});
        
        res.status(200).json(countries)

    }catch(error){
        return res.status(error.errors[0].type).json({error :error.message});
    }
}

module.exports = {
    getCountryByName
}