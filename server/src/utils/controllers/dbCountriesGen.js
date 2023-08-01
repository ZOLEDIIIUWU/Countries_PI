//este controller añade todos los paises desde el array recibido a la base de datos

const { Country } = require("../../db")

const getDbCountries = require('./getDbCountries')

const dbCountriesGen = async(allCountries) => {
        await Promise.all(allCountries.map(async(country) => {
            try {
                const createdCountry = await Country.create(country);
                return createdCountry.toJSON()
            }catch(error) {
                return error
            }
        }))
        return getDbCountries();
}

module.exports = dbCountriesGen;