const assert = require('assert')
describe('My Login application', () => {
    it('should have the right title', async () => {
        await browser.url(process.env.ENV)
        const title = await browser.getTitle()
        assert.strictEqual(title, 'Google')
    })
});