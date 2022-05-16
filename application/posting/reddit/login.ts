import { Page } from 'puppeteer-core'
import settings from '../../settings.json'
import { pause } from '../../human/pause'
import { typeLikeHuman } from '../../human/type'

export const logInToReddit = async (
    page: Page
): Promise<void> => {
    await page.goto('https://www.reddit.com/')

    await page.waitForNavigation()

    const [loginButton] = await page.$x('//*[@id="SHORTCUT_FOCUSABLE_DIV"]/div[1]/header/div/div[2]/div/div[1]/a[1]')
    loginButton.focus()
    await pause(2.0)
    loginButton.click()

    // await pause(2.0)

    // const { username, password } = settings.reddit
    // await typeLikeHuman(page, '#loginUsername', username)

    // await pause(1.0)
    // await typeLikeHuman(page, '#loginPassword', password)

    // await pause(1.0)

    // await page.click('button[type=submit]')

    // await page.waitForNavigation()
}
