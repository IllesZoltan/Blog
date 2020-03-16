
const userData = {
    userDataName: 'admin',
    userDataPassword: 'admin'
}

const warning = 'Error: invalid credentials !'

module.exports = class Login {
    getLogin(req, res) {
        const {username, password} = req.body;
        
        if(username === userData.userDataName && password === userData.userDataPassword){
            res.render('admin')
        }else{
            res.render('login', {warning});
        }
    }
}