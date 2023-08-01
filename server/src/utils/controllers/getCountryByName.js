// esta funcion recibe un nombre por parametros, busca todas las coincidencias en la base de datos y devuelve un array con las coincidencias

const { Country } = require('../../db')
const { Op } = require('sequelize');

const getCountryByName = async(name) => {
    try {
        const country = await Country.findAll({
            where: {name: {[Op.like]: `%${name}%`}}
        })
        return country
    }catch(error) {
        return error
    }
    
}

module.exports = getCountryByName;