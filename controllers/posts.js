const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('postarchive.db');

const posts = [];

module.exports = class Posts {
    getPosts(req, res) {
        posts.length = 0;

        db.serialize(function () {
            db.all('SELECT id, title, author, created_at, text FROM posts', (err, row) => {
                if (err) { console.log('Error: ', err); }
                if (row) {
                    row.forEach((elem) => {
                        posts.push(elem)
                        console.log('pDs:  ', posts);
                        res.render('posts', { posts });
                    })
                }
                res.end();
            })
        })
    }
}