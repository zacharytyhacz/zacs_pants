import { Browser } from 'puppeteer-core'
import { logInToLinkedIn } from './login'
import { goToPostForm } from './goToPostForm'
import { Post } from '../../checkForPosts'

export const postToLinkedIn = async (
    browser: Browser,
    post: Post
): Promise<void> => {
    const page = await browser.newPage()
    page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36')

    await logInToLinkedIn(page)
    await goToPostForm()

    page.close()
}
