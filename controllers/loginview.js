const AUTH_COOKIE = 'authcookie'

module.exports = class Login {
    show(req, res) {
        const authCookie = req.cookies[AUTH_COOKIE]
        let session = undefined;

        if(authCookie){
            session = authCookie.user;
        }

        if (session) {
            const newPostMessage = 'Allready logged in !';
            const username = session.userDataName;
            res.render('admin', { newPostMessage, username })
        }else{
            res.render('login');
        }
    }
}