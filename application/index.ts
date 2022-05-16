import { CronJob } from 'cron'
import puppeteer, { Browser } from 'puppeteer-core'
import { checkForPosts } from './checkForPosts'
import { postToLinkedIn } from './posting/linkedin'
import { postToReddit } from './posting/reddit'

let browser: Browser

const start = async (): Promise<void> => {
    // setup puppeteer
    browser = await puppeteer.launch({
        headless: false
    })

    // const everyMinute = '0 * * * * *'
    // const zacsPants = new CronJob(everyMinute, () => {

    const postsReadyToBePostedNow = checkForPosts()

    if (!postsReadyToBePostedNow.length) {
        return
    }

    await Promise.all(postsReadyToBePostedNow.map((readyPost) => {
        const { platforms, ...post } = readyPost

        let postHandlers = []

        if (platforms.includes('linkedin')) {
            postHandlers.push(
                postToLinkedIn(browser, post)
            )
        }

        if (platforms.includes('reddit')) {
            postHandlers.push(
                postToReddit(browser, post)
            )
        }

        return Promise.all(postHandlers)
    }))

    // })

    // zacsPants.start()
}

process.on('exit', () => browser.close())
process.on('SIGINT', () => browser.close())
start().catch((err) => {
    console.error('An error occured: ', err)
    browser.close()
})

