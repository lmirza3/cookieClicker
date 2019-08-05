module.exports = {
    'Cookie Clicker' (browser) {

        const website = 'https://orteil.dashnet.org/cookieclicker/';
        const cookieButton = '#bigCookie';
        const upgrade = '.product.unlocked.enabled';
        
        browser
            .url(website)
            .waitForElementVisible(cookieButton)
            .pause(500)
            .perform(function(browser,done) {
                intervalTime = setInterval(function() {
                    browser.waitForElementVisible(cookieButton)
                    browser.click(cookieButton)
                    browser.getText('#productOwned1.title.owned' , function (result) {
                        if(result.value == '1') {
                            console.error('Grandma has been acquired!', timeout);
                            browser.end();
                        }
                    });
                    browser.isPresent(upgrade, cursorPresent => {
                        browser.click(upgrade)
                    })
                done();
            },100)
        })
    } 
}