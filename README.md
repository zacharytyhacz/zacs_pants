# Zac's Pants
## An automated social media posting app

![j4gD4fw](https://user-images.githubusercontent.com/38140593/165675480-d4dc1970-6bf3-4f6e-ad34-68f0c8789186.jpg)

- Puppeteer.js
- Typescript
- No API tokens, subscriptions, or sign up
- Free and Open Source
- Simple JSON object format for posts
- Create one post object, post to everywhere in one place.
- Runs only on your computer; `zacs_pants`is not a centralized service or database.
- _Hopefully_ an awesome scheduler. Uses your computer's clock.

## To-Do List

- [x] Posting to LinkedIn
- [x] Posting simple title + text to Reddit
- [ ] Posting images + video to Reddit ( WIP )
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
        "datesToPost": ["2022-04-24T20:11:10.193Z"], // doesn't work yet
        "description": "the description of this post.",
        "hashtags": [
            "#help",
            "#ayo",
            "#bruh"
        ],
        "mediaSource": "nameOfFileInMediaFolder.jpg", // file name in application/media/ folder
        "meta": {
            "subreddits": [ // for reddit posts
                "r/duckduckgo"
            ]
        },
        "platforms": [
            "linkedin",
	        "reddit" // you can now post only text/desription to reddit!
        ],
        "title": "title for this post. linkedin doesn't have titles, but other social medias do ( like youtube )"
    }
]
```
