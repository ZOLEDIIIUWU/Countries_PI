const { Country, Activity } = require("../../db")

const postActivity = async({name, season, difficulty, duration, countries}) => {
    const newActivity = await Activity.create({
        name, 
        season, 
        difficulty, 
        duration
    })
    await Promise.all(
        countries.map(async(country) => {
            let countryActivity = await Country.findOne({where: {name: country.toLowerCase()}})
            await countryActivity.addActivity(newActivity)
        })
    )
    return newActivity
}

module.exports = postActivity;