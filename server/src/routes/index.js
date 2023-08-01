const { Router } = require('express');

const getCountries = require('./countries')
const getCountryByID = require('./countries')
const getCountryByName = require('./countries')
const getActivities = require('./activities')
const postActivity = require('./activities')

const router = Router();

router.use('/countries', [
    getCountries,
    getCountryByName,
    getCountryByID
])

router.use('/activities', [
    getActivities,
    postActivity
])

module.exports = router;
