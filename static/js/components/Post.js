import { html } from "../router.js"

export function Post (post) {
    const markdown = marked.parse(post.markdown)
    console.log(post)
    const template = html`
        <div class="post__title">
            ${post.metaData.title}
        </div>
        <div class="post__date">
            ${new Date(post.metaData.liveAt).toDateString()}
        </div>
        <div class="post__content">
            ${markdown}
        </div>
    `
    const postElem = document.createElement('div')
    postElem.classList.add('post')
    postElem.innerHTML = template
    return postElem
}