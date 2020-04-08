
const userData = {
    admin: {
        userDataName: 'admin',
        userDataPassword: 'admin'
    }
}

const AUTH_COOKIE = 'authcookie'
const workingSessions = {}


function authenticateUser(username, password) {
    const user = userData[username]
    if (user && user.userDataPassword == password) {
        return user
    }
    return undefined
}

function createSession(user) {
    const session = { id: user.userDataName, user };
    workingSessions[session.id] = session;
    return session;
}



module.exports = class Login {
    show(req, res) {
        let warning = ''
        const { username, password } = req.body;
        const currentUser = authenticateUser(username, password);
        
        if (currentUser) {
            const username = currentUser.userDataName;
            const session = createSession(currentUser);
            res.cookie(AUTH_COOKIE, session);
            res.render('admin', {username});
        } else {
            if (!username) {
                warning = 'Username required !'
            }
            else if (username !== userData.userDataName) {
                warning = 'Wrong user name !'
            }
            else if (!password) {
                warning = 'Password required !'
            }
            else if (password !== userData.userDataPassword) {
                warning = 'Wrong password !'
            }
            res.render('login', { warning });
        }
    }
}
