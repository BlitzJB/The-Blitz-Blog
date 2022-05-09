import { Router } from './router.js'

import { post } from './pages/post.js'
import { home } from './pages/home.js'

const content = document.querySelector('#content')
const _router = new Router()

// TODO Router.redirect()
// TOOO Router.serve()

_router.registerRoute('/', home)
console.log(_router.routes)

_router.registerRoute('/p', () => {})

_router.registerRoute('/p/<title>', post)

export const router = _router
