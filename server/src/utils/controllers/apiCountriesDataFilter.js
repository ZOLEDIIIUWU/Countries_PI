//este controller recibe un json con todos los countries y devuelve un array con los datos de filtrados

const apiCountriesDataFilter = async(apiCountries) => {
    let countriesDataFiltered = apiCountries.data.map(country => {
        return {
            id: country.cca3,
            name: country.name.common.toLowerCase(),
            flagImage: country.flags.png,
            continent: country.continents[0],
            capital: country.capital ? country.capital[0] : country.name.common,
            subregion: country.subregion,
            area: country.area,
            population: country.population
        }
    })
    return countriesDataFiltered;
};

module.exports = apiCountriesDataFilter;