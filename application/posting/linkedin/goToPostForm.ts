import { Page } from 'puppeteer-core'
import { pause } from '../../human/pause'

export const goToPostForm = async (
    page: Page
): Promise<void> => {
    await pause(1.0)
    await page.click('.artdeco-button__text')
}
