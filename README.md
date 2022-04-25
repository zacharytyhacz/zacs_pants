# Zac's Pants
## An automated social media posting app

- Puppeteer.js
- Typescript

## To-Do List

- [ ] Posting to LinkedIn ( WIP )
- [ ] Posting to Reddit
- [ ] Posting to Instagram
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
