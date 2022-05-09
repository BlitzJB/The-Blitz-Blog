import { Post } from '../components/Post.js'
import { Nav } from '../components/Nav.js'

const content = document.querySelector('#content')

export function post(matches) {
    // TODO: Next post and Continue reading
    content.innerHTML = ''
    content.appendChild(Nav())
    fetch('/api/post/' + encodeURI(matches.title.replaceAll('-', ' '))).then(res => res.json()).then(post => {
        content.appendChild(Post(post))
    })
}