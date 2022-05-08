import { Browser } from 'puppeteer-core'
import { logInToLinkedIn } from './login'
import { goToPostForm } from './goToPostForm'
import { Post } from '../../checkForPosts'
import { typeLikeHuman } from '../../human/type'
import { pause } from '../../human/pause'

export const postToLinkedIn = async (
    browser: Browser,
    post: Post
): Promise<void> => {
    const page = await browser.newPage()
    page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36')

    await logInToLinkedIn(page)
    await goToPostForm(page)

    await page.focus('.ql-editor')
    await pause(1.0)
    await typeLikeHuman(page, '.ql-editor', post.description)

    if (post.hashtags?.length) {
        page.keyboard.press('Enter')
        page.keyboard.press('Enter')

        for (const hashtag of post.hashtags) {
            page.keyboard.press('Space')
            await typeLikeHuman(page, '.ql-editor', hashtag)
        }
    }

    await pause(2.0)

    if (post.mediaSource) {
        const goToFileUploadSelector = 'li-icon[type=image-icon]'
        await page.hover(goToFileUploadSelector)
        await pause(1.0)
        await page.click(goToFileUploadSelector)

        await pause(3.0)

        const fileUploadSelector = 'label[for=image-sharing-detour-container__file-input]'

        const pathToMediaSourceFile = `${__dirname}/../../../media/${post.mediaSource}`
        console.log({ pathToMediaSourceFile })

        const [fileInput] = await Promise.all([
            page.waitForFileChooser(),
            page.click(fileUploadSelector)
        ])
        await fileInput.accept([pathToMediaSourceFile])

        await pause(3.0)

        await page.click('.ml2.artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view')
    }

    await pause(2.0)
    await page.hover('.share-box_actions button')
    await pause(1.0)
    await page.click('.share-box_actions button')
    await pause(10.0)
    await page.close()
}
