import posts from './posts.json'

export type Post = {
    datesToPost: number[]
    description: string
    hashtags: string[]
    mediaSource?: string
    platforms?: string[]
    title: string
}

const socialMediaPlatforms = [
    'linkedin'
]

export const checkForPosts = ():Post[] => {
    let postsThatNeedToBePosted: Post[] = []
    const now = Date.now()

    posts.forEach((post) => {
        socialMediaPlatforms.forEach((socialMediaPlatform) => {
            const socialMediaPost: Post = post[socialMediaPlatform]
            if (socialMediaPost.datesToPost.includes(now)) {
                postsThatNeedToBePosted.push(socialMediaPost)
            }
        })
    })

    return postsThatNeedToBePosted
}
