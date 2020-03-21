const fs = require('fs');

const posts = [];
const pD = JSON.parse(fs.readFileSync('./postdata.json'));
pD.forEach(element => {
    posts.push(element)
    
});


module.exports = class Posts {
    getPosts(req, res) {        
        res.render('posts', { posts });
    }
}