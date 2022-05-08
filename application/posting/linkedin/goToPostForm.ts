import { Page } from 'puppeteer-core'
import { pause } from '../../human/pause'

export const goToPostForm = async (
    page: Page
): Promise<void> => {
    await page.waitForNavigation()
    await pause(5.0)
    await page.click('#ember33')
    await pause(3.0)
}
