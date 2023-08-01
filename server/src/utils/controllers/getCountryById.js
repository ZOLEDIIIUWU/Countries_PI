//esta funcion recibe un id, los paises y busca el que coincida

const { Country, Activity } = require('../../db')

const getCountryById = async(id) => {
    try {
        const country = await Country.findAll({
            where: {id: id.toUpperCase()},
            include: [{
                model: Activity,
                require: false
            }]
        })
        return country
    }catch(error) {
        return error
    }
}

module.exports = getCountryById;