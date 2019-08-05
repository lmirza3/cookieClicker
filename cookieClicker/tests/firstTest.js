module.exports = {
    'Cookie Clicker' (browser) {

        const website = 'https://orteil.dashnet.org/cookieclicker/';
        const cookieButton = '#bigCookie';
        const upgrade = '.product.unlocked.enabled';
        const grandmaUpdated = '#productOwned1.title.owned';
        
        browser
            .url(website)
            .waitForElementVisible(cookieButton)
            .pause(500)
            .perform(function(browser,done) {
                intervalTime = setInterval(function() {
                    browser.waitForElementVisible(cookieButton)
                    browser.click(cookieButton)
                    browser.getText(grandmaUpdated, function (result) {
                        if(result.value == '1') {
                            console.error('Grandma has been acquired!');
                            browser.end();
                        }
                    });
                    browser.isPresent(upgrade, cursorPresent => {
                        browser.click(upgrade)
                    })
                done();
            },200)
        })
    } 
}