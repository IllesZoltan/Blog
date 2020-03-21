const express = require('express');
const hdlbrs = require('express-handlebars');


const sPage = require('./controllers/startpage');
const startPage = new sPage();

const aPage = require('./controllers/adminpage');
const adminPage = new aPage();

const newP = require('./controllers/newpost');
const newPost = new newP();

const newPV = require('./controllers/newpostview');
const newPostView = new newPV();

const pController = require('./controllers/posts');
const postsController = new pController();

const lController = require('./controllers/login');
const loginController = new lController();

const lViewController = require('./controllers/loginview');
const loginViewController = new lViewController();


const url = 'http://localhost:4040'

const app = express();
const port = process.env.port || 4040;




app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('cookie-parser')());

app.engine('handlebars', hdlbrs())
app.set('view engine', 'handlebars')



app.get('/', startPage.start)

app.get('/admin', adminPage.start)

app.get('/newpostview', newPostView.show)

app.post('/newpost', newPost.posting)

app.get('/posts', postsController.getPosts)

app.get('/loginView/:state', loginViewController.getView)

app.post('/login', loginController.getLogin)


app.listen(port, (err) => {
    if (err) {
        console.log('Error: ' + err);
    } else {
        console.log(`App listens to port: ${port}`);
    }
})
