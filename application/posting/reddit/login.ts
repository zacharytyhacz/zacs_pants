import { Page } from 'puppeteer-core'
import settings from '../../settings.json'
import { pause } from '../../human/pause'
import { typeLikeHuman } from '../../human/type'

export const logInToReddit = async (
    page: Page
): Promise<void> => {
    await page.goto('https://www.reddit.com/login/?dest=https%3A%2F%2Fwww.reddit.com%2F')

    await pause(6.0) // bot is comtemplating life

    const { username, password } = settings.reddit
    await typeLikeHuman(page, '#loginUsername', username)

    await pause(1.0)
    await typeLikeHuman(page, '#loginPassword', password)

    await pause(1.0)

    await page.click('button[type=submit]')

    // might change to pause amount
    await page.waitForNavigation()
}
