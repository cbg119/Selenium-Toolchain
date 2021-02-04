function setSauceTitle(driver, name) {
    driver.executeScript("sauce:job-name=" + name)
}

module.exports = setSauceTitle;