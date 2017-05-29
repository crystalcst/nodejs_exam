const webdriver = require('selenium-webdriver'),
      By = webdriver.By;

var driver = new webdriver.Builder()
    .withCapabilities({
        browserName:'chrome',
        'chromeOptions': {
            args:['test-type']
        }
    })
    .build();

driver.get("http://localhost:3000/index/index");
driver.findElement(By.id('praise')).click();
driver.quit();
