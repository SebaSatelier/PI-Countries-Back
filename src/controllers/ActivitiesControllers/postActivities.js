const { Activity, Country } = require('../../db');

const postActivity = async (req, res) => {
    const {name,dificulty, duration, season, image, country} = req.body
    try{
        if(!name || !dificulty || !duration || !season || !country) {
            return res.status(400).json('missing data to add the activity')
        }

        const [activity, created] = await Activity.findOrCreate({
            where: {name : name,
                    dificulty: dificulty,
                    duration: duration,
                    season: season,
                    image: image}
            });
        
        if(!activity) return res.status(400).json({error : 'could not create activity'});


        const countries = await Country.findAll({
            where: {name: country}
        })

        if (!countries || countries.length === 0) {
            return res.status(400).json({ error: 'one or more countries were not found' });
        }

        const createActivity = await activity.addCountries(countries);
        
        res.status(200).json({message: "activity created successfully"})

    }catch(error){
        return res.status(500).json({error :error.message});
    }
}

module.exports = {
    postActivity
}