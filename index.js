const express = require('express');
const hdlbrs = require('express-handlebars');
const bodyparser = require('body-parser');
const pController = require('./controllers/posts');

const postsController = new pController();


const app = express();
const url = 'http://localhost:4040'
const port = process.env.port || 4040;



app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', hdlbrs())
app.set('view engine', 'handlebars')


app.get('/', postsController.getPosts)






app.listen(port, (err) => {
    if (err) {
        console.log('Error: ' + err);
    } else {
        console.log(`App listens to port: ${port}`);
    }
})