const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('postarchive.db');

const posts = [];

module.exports = class Posts {
    getPosts(req, res) {
        const id = req.query.id

        console.log('the author is: ',id);
        

        db.serialize(function () {
            posts.length = 0;
            let sqlstring = 'SELECT id, title, author, created_at, text FROM posts'

            if(id){
                sqlstring += " WHERE id="+id
            }

            db.all(sqlstring, (err, row) => {
                if (err) { console.log('Error: ', err); }
                row.forEach((elem) => {
                    posts.push(elem)
                })
                console.log('postsDs:  ', posts);
                res.render('posts', { posts });
            })
        })

    }
}