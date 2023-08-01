const { Router } = require('express');
const router = Router();
const axios = require('axios');

const dataFilter = require('../utils/controllers/apiCountriesDataFilter')
const dbCountriesGen = require('../utils/controllers/dbCountriesGen')
const getCountryByName = require('../utils/controllers/getCountryByName')
const getCountryById = require('../utils/controllers/getCountryById')

router.get('/', async(req, res) => {
    let name = req.query.name

    try {
        if(name){
            let countryList = await getCountryByName(name)
            res.status(200).send(countryList)
        }else {
            let allCountries = await axios.get("http://localhost:5000/countries")
            let countriesDataFiltered = await dataFilter(allCountries)
            let alldbCountries = await dbCountriesGen(countriesDataFiltered)
            res.status(200).json(alldbCountries)
        }
    }catch(error) {
        res.status(error.status).json({error: error.message})
    };
})

router.get('/:id', async(req, res) => {
    let id = req.params.id

    try {
        
        const country = await getCountryById(id)
        res.status(200).send(country)
    } catch(error) {
        res.status(error.status).json({error: error.message})
    }
})

module.exports = router;