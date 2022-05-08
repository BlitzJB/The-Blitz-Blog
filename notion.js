const { Client } = require("@notionhq/client")
const { NOTION_INTEGRATION } = require("./config")
const { NotionToMarkdown } = require("notion-to-md");

const notionClient = new Client({ auth: NOTION_INTEGRATION })
const notionToMarkdownClient = new NotionToMarkdown({ notionClient: notionClient })

class Notion {
    constructor() {
        this.notionClient = notionClient
        this.dbId = 'bf0e580f18314ef5ad1200493bf47868'
    }

    async queryDb(filter = false, sort = false) {
        let query = {
            database_id: this.dbId,
        }
        if (filter) {
            query.filter = filter
        }
        if (sort) {
            query.sorts = sort
        }
        const response = await this.notionClient.databases.query(query);
        return response.results.map(result => {
            return new BlogPost(result)
        })
    }

    async publishedPosts() {
        return await this.queryDb({
            or: [
                {
                    property: "Live-at",
                    date: {
                        before: new Date()
                    }
                }
            ]
        },
        [{
            property: "Live-at",
            direction: "ascending"
        }])
    }

    async fromTitle(title) {
        return await this.queryDb({
            or: [
               {
                    property: "Title",
                    title: {
                        equals: title
                    }
               }
            ]
        })
    }

    async oneFromTitle(title) {
        let res = await this.fromTitle(title)
        return  res[0] // TODO Invalid title check
    }

}


class BlogPost {
    constructor(post) {
        this.n2m = notionToMarkdownClient
        this.notionUrl = post.url 
        this.createdAt = post.properties["Created At"]
        this.tags = post.properties.Tags.multi_select
        this.specificCoverImage = post.properties["Specific-Cover-Image"].files[0] ? post.properties['Specific-Cover-Image'].files[0].file.url : false
        this.id = post.properties["Unique-id"].formula.string
        this.title = post.properties["Title"].title[0].plain_text
        this.liveAt = post.properties["Live-at"].date.start
    }

    extractPageId(url) {
        return url.split('/').pop().split('-').pop()
    }

    async toMarkdown() {
        return this.n2m.toMarkdownString(await this.n2m.pageToMarkdown(this.extractPageId(this.notionUrl)))
    }

    metaData() {
        return {
            liveAt: this.liveAt,
            tags: this.tags,
            title: this.title,
            specificCoverImage: this.specificCoverImage,
            id: this.id
        }
    }

    async reqPayload() {
        return {
            markdown: await this.toMarkdown(),
            metaData: this.metaData()
        }
    }
}

module.exports = {
    Notion
}