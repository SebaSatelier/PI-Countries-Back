const {Country} = require('../../db');

const postCountry = async (req,res) =>{
    const {id,name,flag,continent,capital,subregion,area,population} = req.body
    const country = {id,name,flag,continent,capital,subregion,area,population}
    console.log(country);
    try{

        if(!id || !name || !flag || !continent|| !capital || !subregion || !area || !population){
            return res.status(400).json({error:"missing data to creata country"})
        }
        

        const countryCreated = await Country.create(country)
        
        if(!countryCreated) res.status(400).json({error:"could not create country"})
        
        return res.status(200).json({error:"country created succesfully"})

    }catch(error){
        return res.status(500).json({error: error.error});
    }
}

module.exports = {
    postCountry
}