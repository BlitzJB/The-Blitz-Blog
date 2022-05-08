const app = require('./express');

// const { Notion } = require('./notion');

// const notion = new Notion();
// notion.fromTitle("mm").then(posts => {
//     posts.forEach(post => {
//         
//         console.log(post)
//     })
// });

app.listen(8080)
console.log('Server started at http://localhost:' + 8080);

// https://github.com/markedjs/marked
// https://www.npmjs.com/package/notion-to-md