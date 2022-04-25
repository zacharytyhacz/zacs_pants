import { Page } from 'puppeteer-core'
import settings from '../../settings.json'
import { pause } from '../../human/pause'
import { typeLikeHuman } from '../../human/type'

export const logInToLinkedIn = async (
    page: Page
): Promise<void> => {
    await page.goto('https://www.linkedin.com/')

    await typeLikeHuman(page, '#session_key', settings.linkedin.username)
    await typeLikeHuman(page, '#session_password', settings.linkedin.password)

    await pause(0.5)
    await page.click('.sign-in-form__submit-button')
}
