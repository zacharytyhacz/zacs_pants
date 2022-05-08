import { Page } from 'puppeteer-core'
import { pause } from '../human/pause'


export const typeLikeHuman = async (page: Page, selector: string, text: string): Promise<void> => {
  await pause(1)
  await page.focus(selector)

  for (let i = 0; i < text.length; i++ ){
    await pause(0.25)
    await page.type(selector, text[i])
  }
}
