const { Country, Activity } = require("../../db")

const getAllActivities = async() => {
    try {
        console.log("si");
        const activities = await Activity.findAll({
            include: [{
                model: Country
            }]
        })
        let activitiesData = activities.map(activity => activity.dataValues)
        return activitiesData
    }catch(error) {
        return error
    }
}

module.exports = getAllActivities;