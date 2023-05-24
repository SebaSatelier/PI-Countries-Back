const { User, Country, Activity } = require('../../db');

const addFavorites = async (req, res) => {
    const {countryId, userId} = req.body
    try{
        if(!countryId || !userId) {
            return res.status(400).json('missing data to add favorite')
        }

        const country = await Country.findByPk(countryId);
        
        if(!country) return res.status(400).json({error : 'country not found'});


        const user = await User.findByPk(userId)

        if (!user) {
            return res.status(400).json({ error: 'user not found'});
        }

        const addFav = await user.addCountries(country);

        if(!addFav) return res.status(400).json({error : 'the favorite was not added'});

        const favorites = await await User.findByPk(userId,{
            include: [{
                model: Country,
                attributes: ['id','name', 'flag','continent','capital','subregion','area','population'],
                include: [
                    {
                      model: Activity,
                      attributes: ['name'],
                    }]
            }
            ]
          })
        
        res.status(200).json(favorites.countries)

    }catch(error){
        return res.status(500).json({error :error.message});
    }
}

module.exports = {
    addFavorites
}