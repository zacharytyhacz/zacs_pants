import { Browser } from 'puppeteer-core'
import { Post } from '../../checkForPosts'
import { logInToReddit } from './login'
// import { typeLikeHuman } from '../../human/type'
// import { pause } from '../../human/pause'

export const postToReddit = async (
    browser: Browser,
    post: Post
): Promise<void> => {
    const page = await browser.newPage()
    page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36')

    await logInToReddit(page)
    // log into reddit
    // for each post.meta.subreddits
    //  - go to subreddit page ( directly to url )
    //  - go to post form
    //  - submit post
}
