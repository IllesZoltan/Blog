const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('postarchive.db')
 
db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS posts (id INT, title VARCHAR(200), author VARCHAR(100), created_at VARCHAR(30), text TEXT)");
});

function toDel (){
    db.serialize(() => {
        db.run('DELETE FROM posts')
    })
};

toDel();
