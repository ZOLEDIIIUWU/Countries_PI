const { Router } = require('express');
const router = Router();

const getAllActivities = require('../utils/controllers/getAllActivities')
const postActivity = require('../utils/controllers/postActivity')

router.get('/', async(req, res) => {
    try {
        let allActivities = await getAllActivities()
        res.status(200).send(allActivities)
    }catch(error) {
        res.status(error.status).json({error: error.message})
    }
})

router.post('/', async(req, res) => {
    const activity = req.body
    try {
        const newActivity = await postActivity(activity)
        res.status(200).send(newActivity)
    }catch(error) {
        res.status(error.status).json({error: error.message})
    }
})

module.exports = router;