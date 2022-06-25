
import { Builder, Capabilities, By } from "selenium-webdriver"
import { forEachChild, visitEachChild } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

})
test('Draw button displays choices', async () => {
    await driver.findElement(By.id('draw')).click();
    const choices = await driver.findElement(By.id('choices'))
    expect(choices.isDisplayed()).toBeTruthy
})
//This one I expect to return false
test('Show all robots button works', async () =>{
    await driver.findElement(By.id('see-all')).click();
    const allBots = await driver.findElement(By.id('all-bots'))
    const botCard = await driver.findElement(By.className('bot-card'))
    expect(allBots).toContain(botCard);
})