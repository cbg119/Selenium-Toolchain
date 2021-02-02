function alertIsPresent(driver) {
    try {
        return (driver.getAlerText() != null)
    } catch {
        return false
    }
}

module.exports = alertIsPresent;