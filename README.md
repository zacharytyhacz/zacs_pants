![j4gD4fw](https://user-images.githubusercontent.com/38140593/165675480-d4dc1970-6bf3-4f6e-ad34-68f0c8789186.jpg)

# Zac's Pants
## An automated social media posting app

- Puppeteer.js
- Typescript

## To-Do List

- [x] Posting to LinkedIn
- [ ] Posting to Reddit ( WIP )
- [ ] Add cronjob and check for posts that are scheduled
- [ ] Prepare frontend for desktop app with tauri ( Chakra UI )
- [ ] Posting to Instagram
- [ ] Add support for multiple media files
- [ ] Posting to Instagram Stories
- [ ] Posting to Youtube
- [ ] Posting to Youtube Shorts
- [ ] Posting to Youtube Stories
- [ ] Posting to TikTok


## How to use

This little automated posting app depends on a `settings.json` and `posts.json`

```bash
# Clone this repo
cd zacs_pants/application


# install the dependencies
yarn install

# Install the chromium browser for puppeteer
yarn setup

# Setup your credentials
cp settings.json.example settings.json
vim settings.json

# Add your media videos or images
mkdir media
mv yourImageOrVideo.png media/

# Setup your posts
cp posts.json.example posts.json
vim posts.json


# Start the app.
yarn start
```

## `posts.json` schema
```json
[
    {
        "datesToPost": [
            "2022-04-24T20:11:10.193Z"
        ],
        "description": "the description of this post.",
        "hashtags": [
            "#help",
            "#ayo",
            "#bruh"
        ],
        "mediaSource": "nameOfFileInMediaFolder.jpg",
        "meta": {
            "thumbnail": "nameOfFileInMediaFolder.jpg", // e.g. for youtube videos
            "private": false
        },
        "platforms": [
            "linkedin",
            // more coming soon
        ],
        "title": "title for this post. linkedin doesn't have titles, but other social medias do ( like youtube )"
    }
]
```
