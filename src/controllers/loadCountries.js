const axios = require("axios");

const {Country} = require('../db');

//CONTROLADOR PARA CARGAR TODOS LOS PAISES DESDE LA API CUANDO SE INICIA EL SERVIDOR

const loadCountries = async () =>{
    try{
        const {data} = await axios('https://restcountries.com/v3/all');

        if(!data) throw Error("not found");

        data.map(async country => await Country.findOrCreate({
            where: {id : country.cca3},
            defaults:{
                name : country.name.common,
                flag : country.flags,
                continent : country.region,
                capital : country?.capital?.[0],
                subregion : country.subregion,
                area: country.area,
                population: country.population
            }
            }))
        
        return;

    }catch(error){
        return error;
    }
}

module.exports = {
    loadCountries
}