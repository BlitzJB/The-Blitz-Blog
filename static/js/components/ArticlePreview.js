import { html } from "../router.js"

export function ArticlePreview() {
    return fetch('/api/all-posts').then(res => res.json()).then(posts => {
        let out = posts.map(post => {
            let markup = html`
                    <div class="preview__left">
                        ${ArticleTitle(post.metaData)}
                        ${ArticleDate(post.metaData)}
                        ${ArticlePreviewText(post)}
                    </div>
                    <div class="preview__right">
                        ${ArticlePreviewImage(post)}
                    </div>
            `
            let preview = document.createElement('div')
            preview.classList.add('preview')
            preview.innerHTML = markup
            return preview
        })
        let previewContainer = document.createElement('div')
        previewContainer.classList.add('preview-container')
        previewContainer.appendChild(TopHeader())
        previewContainer.append(...out)
        return previewContainer
    })
}

function TopHeader() {
    let topheader = document.createElement('h1')
    topheader.classList.add('top-header')
    topheader.innerHTML = 'Posts'
    return topheader
}

function ArticleTitle(post) {
    return html`
        <h2 class="preview__title">${post.title}</h2>
    `
}

function ArticleDate(post) {
    return html`
        <span class="preview__date">${new Date(post.liveAt).toDateString()}</span>
    `
}

function ArticlePreviewText(post) {
    let firstParagraph = post.markdown.split('\n')
    for (let paragraph of firstParagraph) {
        if (paragraph.length > 0) {
            let parsed = marked.parse(paragraph + html`... <a href="/p/${post.metaData.title.replaceAll(' ', '-')}">Continue reading</a>`)
            return parsed
        }
    }
}

function ArticlePreviewImage(post) {
    let image;
    if (post.metaData.specificCoverImage) {
        image = post.metaData.specificCoverImage
    } else if ((post.markdown.match(/!\[.*\]\(.*\)/g))) {
        image = post.markdown.match(/!\[.*\]\(.*\)/g)[0].split(')')[0].split('(')[1]
    } else {
        return ``
    }
    return html`
        <img class="preview__image" src="${image}" alt="${post.metaData.title}">
    `
}