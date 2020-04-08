const AUTH_COOKIE = 'authcookie'

module.exports = class AdminPage {
    start(req, res) {
        const authCookie = req.cookies[AUTH_COOKIE]
        const username = authCookie.user.userDataName
        res.render('admin', {username});
    }
}