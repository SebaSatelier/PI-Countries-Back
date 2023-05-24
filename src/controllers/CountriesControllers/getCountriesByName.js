const { Country, Activity } = require('../../db');
const { Op } = require("sequelize");

const getCountryByName = async (req, res) => {
    const {name} = req.query
    let countries = [];
    try{
        countries = await Country.findAll({
            where: {
              name: {
                [Op.iLike]: `%${name}%`,
              },
            },
            include: [{
              model: Activity,
              attributes: ['id', 'name', 'dificulty', 'duration', 'season'],
            }],
          });

        if(!countries) return res.status(400).json({error : 'No se encuentra el pais indicado con ese nombre'});
        
        res.status(200).json(countries)

    }catch(error){
        return res.status(500).json({error :error.message});
    }
}

module.exports = {
    getCountryByName
}