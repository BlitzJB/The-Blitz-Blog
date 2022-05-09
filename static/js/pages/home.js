import { Nav } from "../components/Nav.js";
import { ArticlePreview } from "../components/ArticlePreview.js";

const content = document.querySelector('#content')

export function home(m) {
    content.innerHTML = '';
    content.appendChild(Nav());
    ArticlePreview().then(preview => {
        content.appendChild(preview);
    })
}
