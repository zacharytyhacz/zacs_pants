import { CronJob } from 'cron'
import puppeteer, { Browser } from 'puppeteer-core'
import { checkForPosts } from './checkForPosts'
import { postToLinkedIn } from './posting/linkedin'

let browser: Browser

const start = async (): Promise<void> => {
    // setup puppeteer
    browser = await puppeteer.launch({
        headless: false
    })

    const everyMinute = '0 * * * * *'
    const zacsPants = new CronJob(everyMinute, () => {
        const postsReadyToBePostedNow = checkForPosts()

        if (!postsReadyToBePostedNow.length) {
            return
        }

        postsReadyToBePostedNow.map((readyPost) => {
            const { platforms, ...post } = readyPost

            if (platforms.includes('linkedin')) {
                postToLinkedIn(browser, post)
            }
        })
    })

    zacsPants.start()
}

process.on('exit', () => browser.close())
process.on('SIGINT', () => browser.close())
start().catch((err) => {
    console.error('An error occured: ', err)
    browser.close()
})

