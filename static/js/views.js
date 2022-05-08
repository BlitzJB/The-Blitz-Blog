import { Router, html } from './router.js'

import { Post } from './components/Post.js'
import { Nav } from './components/Nav.js'

const content = document.querySelector('#content')
const _router = new Router()

// TODO Router.redirect()
// TOOO Router.serve()

_router.registerRoute('/', () => {
    content.innerHTML = html`
        This is homepage<br>
        <a href="/p">mm post</a>
    `
})
_router.registerRoute('/p', () => {
    content.innerHTML = html`
        This is post page without the title in the url<br>
        <a href="/">homepage</a><br>
        <a href="/p/post-title">actual post</a>
    `
})
_router.registerRoute('/p/<title>', (matches) => {
    // TODO: Next post and Continue reading
    content.innerHTML = ''
    content.appendChild(Nav())
    fetch('/api/post/' + encodeURI(matches.title.replaceAll('-', ' '))).then(res => res.json()).then(post => {
        content.appendChild(Post(post))
    })
})

export const router = _router
