const { Country, User, Activity } = require('../../db');

const getFavorites = async (req, res) => {
    const {id} = req.query
    try{
        if(!id) return res.status(400).json({error: "id is needed"})

        const user = await User.findByPk(id)

        if(!user) return res.status(400).json({error: "user not found"})

        const favorites = await User.findByPk(id,{
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
    getFavorites
}