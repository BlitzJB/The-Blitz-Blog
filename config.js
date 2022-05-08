const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    NOTION_INTEGRATION: process.env.NOTION_INTEGRATION,
    HTML_DIR: process.env.HTML_DIR
}