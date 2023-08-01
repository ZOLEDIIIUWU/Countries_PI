//esta funcion devuelve un array con todos los paises

const { Country, Activity } = require("../../db")

const getDbCountries = async() => {
    try {
        const countries = await Country.findAll({
            include: [{
                model: Activity,
                require: false
            }]
        })
        let countriesData = countries.map(country => country.dataValues)
        return countriesData
    }catch(error) {
        return error
    }
}

module.exports = getDbCountries;