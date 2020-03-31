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

const postList = require('./controllers/postlist');
const postListController = new postList();

const posts = require('./controllers/posts');
const postsController = new posts();

const logIn = require('./controllers/login');
const loginController = new logIn();

const loginView = require('./controllers/loginview');
const loginViewController = new loginView();

const logOut = require('./controllers/logout');
const logoutController = new logOut();

const url = 'http://localhost:4040'

const app = express();
const port = process.env.port || 4040;

const AUTH_COOKIE = 'authcookie'
const warning = 'Login required !'


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('cookie-parser')());

app.engine('handlebars', hdlbrs())
app.set('view engine', 'handlebars')



function authCheck(req, res, next) {
    const authCookie = req.cookies[AUTH_COOKIE];
    if (!authCookie) {
        res.render('login', { warning });
    } else {
        const session = authCookie.user;
        req.session = session;
        next();
    }
}



app.get('/', startPage.start)
app.get('/admin', authCheck, adminPage.start)
app.get('/newpostview', newPostView.show)
app.post('/newpost', authCheck, newPost.entry)
app.get('/postlist', authCheck, postListController.showPostTitles)
app.get('/posts', postsController.getPosts)
app.get('/loginView', loginViewController.show)
app.post('/login', loginController.show)
app.get('/logout', authCheck, logoutController.show)


app.listen(port, (err) => {
    if (err) {
        console.log('Error: ' + err);
    } else {
        console.log(`App listens to port: ${port}`);
    }
})
