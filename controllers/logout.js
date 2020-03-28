const success = 'Logout was successful !'
const AUTH_COOKIE = 'authcookie'



module.exports = class Logout {
    show(req, res) {
        res.clearCookie(AUTH_COOKIE)
        res.render('login', {success});
    }
}