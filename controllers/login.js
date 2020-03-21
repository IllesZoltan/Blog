
const userData = {
    userDataName: 'admin',
    userDataPassword: 'admin'
}

const AUTH_COOKIE = 'authcookie'

module.exports = class Login {
    getLogin(req, res) {
        const {username, password} = req.body;
        let warning = ''
        

        if(username === userData.userDataName && password === userData.userDataPassword){
            res.render('admin')
        }else{
            if(!username){
                warning = 'Username required !'
            }
            else if(username !== userData.userDataName){
                warning = 'Wrong user name !'
            }
            else if(!password){
                warning = 'Password required !'
            }
            else if(password !== userData.userDataPassword){
                warning = 'Wrong password !'
            }
                res.render('login', {warning});
        }
    }
}