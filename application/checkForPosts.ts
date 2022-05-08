import posts from './posts.json'

export type Post = {
    datesToPost: string[]
    description: string
    hashtags: string[]
    mediaSource?: string
    platforms?: string[]
    title: string
}

export const checkForPosts = ():Post[] => {
    return posts
}
