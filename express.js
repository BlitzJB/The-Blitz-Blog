const {  HTML_DIR } = require('./config')
const { Notion } = require('./notion');
const express = require('express');
const path = require('path')
const { cache, clearCache } = require('./middleware')
const notion = new Notion();

const app = express();
app.use(express.static(path.join(__dirname, './static')))

function serve(template) {
    return (req, res) => {
        res.sendFile(path.join(__dirname, HTML_DIR, template))
    }
}


app.get('/api/post/:title', cache(), (req, res) => {
    notion.oneFromTitle(req.params.title).then(post => {
        post.reqPayload().then(payload => {
            res.json(payload)
        })
    });
})

app.get('/api/all-posts', (req, res) => {
    notion.publishedPosts().then(posts => {
        Promise.all(posts.map(post => {
            return post.reqPayload()
        })).then(payloads => {
            res.json(payloads)
        })
    })
})

app.get('/*', serve('index.html'));
// Do something about this being publicly available
// app.get('/api/clearcache/:url', clearCache(req.params.url))

module.exports = app;