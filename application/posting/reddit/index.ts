import { Browser } from 'puppeteer-core'
import { Post } from '../../checkForPosts'
import { logInToReddit } from './login'
import { typeLikeHuman } from '../../human/type'
import { pause } from '../../human/pause'
import { getMediaFilePath } from '../../utils/getMediaFile'

export const postToReddit = async (
    browser: Browser,
    post: Post
): Promise<void> => {
    const page = await browser.newPage()
    page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36')

    await logInToReddit(page)

    const { subreddits } = post.meta
    let subredditIndex = 0

    while (subredditIndex != subreddits.length) {

        const subreddit = subreddits[subredditIndex]

        await page.goto(`https://www.reddit.com/${subreddit}/submit`)

        // old clickable path to get to submit page
        // await page.hover('input[placeholder*=community]')
        // await pause(1.0)
        // await page.click('input[placeholder*=community]')
        // await pause(2.0)
        // const [element] = await page.$x(`//span[contains(text(), "${subreddit}")]`);
        // element.hover()
        // await pause(1.0)
        // element.click()

        await pause(5.0)

        await typeLikeHuman(page, 'textarea[placeholder=Title]', post.title)

        await pause(2.0)

        // check if media attached then go to Images & Video if media
        if (post.mediaSource) {
            const [imagesAndVideoButton] = await page.$x(`//button[contains(text(), "Images & Video")]`);

            await pause(2.0)
            imagesAndVideoButton.hover()
            await pause(1.0)
            imagesAndVideoButton.click()

            const [uploadButton] = await page.$x(`//button[contains(text(), "Upload")]`);
            await pause(2.0)
            await uploadButton.click()

            const pathToMediaSourceFile = getMediaFilePath(post.mediaSource)

            const fileInputSelector = 'input[type=file]'
            const [fileInput] = await Promise.all([
                page.waitForFileChooser(),
                page.click(fileInputSelector)
            ])

            await fileInput.accept([pathToMediaSourceFile])
        } else if (post.description) {
            await page.click('.public-DraftEditor-content')
            await typeLikeHuman(page, '.public-DraftEditor-content', post.description)
        }
        //*[@id="AppRouter-main-content"]/div/div/div[2]/div[3]/div[1]/div[2]/div[3]/div[3]/div[2]/div/div[1]/button
        ///html/body/div[1]/div/div[2]/div[2]/div/div/div/div[2]/div[3]/div[1]/div[2]/div[3]/div[3]/div[2]/div/div[1]/button

        await pause(3.1415)
        const [postButton] = await page.$x('/html/body/div[1]/div/div[2]/div[2]/div/div/div/div[2]/div[3]/div[1]/div[2]/div[3]/div[3]/div[2]/div/div[1]/button');
        await postButton.hover()
        await pause(1.0)
        await postButton.click()

        break
    }
}
