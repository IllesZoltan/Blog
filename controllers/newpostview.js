const AUTH_COOKIE = 'authcookie'
const warning = 'Login required!'

module.exports = class NewPost {
    show(req, res) {
        const authCookie = req.cookies[AUTH_COOKIE]
        let session = undefined;

        if(authCookie){
            session = authCookie.user;
        }

        if (session) {
            const newPostMessage = 'Allready logged in !';
            const username = session.userDataName;
            res.render('npost', { username })
        }else{
            res.render('login', {warning});
        }
    }
}