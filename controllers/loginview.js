const success = 'Logout was successful !'

module.exports = class Login {
    getView(req, res) {
        const state = req.params.state;
        
        if(state === 'logout'){
            res.render('login', {success})
        }
        if(state === 'start'){
            res.render('login');
        }
    }
}