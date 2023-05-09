const axios = require("axios");

const {Country} = require('../db');

const loadCountries = async () =>{
    try{
        const {data} = await axios('https://restcountries.com/v3/all');

        if(!data) throw Error("not found");

        data.map(async country => await Country.create({
                id: country.cca3,
                name : country.name.common,
                flag : country.flags[1],
                continent : country.region,
                capital : country?.capital?.[0],
                subregion : country.subregion,
                area: country.area,
                population: country.population
            }))
        
        return;

    }catch(error){
        return error;
    }
}

module.exports = {
    loadCountries
}