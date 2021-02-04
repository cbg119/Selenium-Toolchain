const alertIsPresent = require("./lib/alertIsPresent")
const setSauceTitle = require("./lib/sauce/setSauceTitle")

module.exports = {
    tools: {
        alertIsPresent
    },

    sauce: {
        setSauceTitle
    }
}