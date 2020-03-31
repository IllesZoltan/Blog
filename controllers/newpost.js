const sql = require('sqlite3').verbose();
const db = new sql.Database('./postarchive.db');


let theID = 0;

const NewP = {
    id: "",
    admin: "",
    datum: "",
    title: "",
    text: ""
}

const AUTH_COOKIE = 'authcookie'

function currentDate() {
    let newDate = new Date();
    theID = newDate.valueOf();
    let dd = String(newDate.getDate()).padStart(2, '0');
    let mm = String(newDate.getMonth() + 1).padStart(2, '0');
    let yyyy = newDate.getFullYear();
    newDate = `${yyyy}.${mm}.${dd}.`;

    return newDate;
}

module.exports = class NewPost {
    entry(req, res) {
        const { posttitle, posttext } = req.body;

        const authCookie = req.cookies[AUTH_COOKIE]
        let session = undefined;
        if(authCookie){
            session = authCookie.user;
        }

        const newPostMessage = 'Adding new post was successful !'
        const username = session.userDataName;

        NewP.admin = username;
        NewP.datum = currentDate();
        NewP.id = theID;
        NewP.title = posttitle;
        NewP.text = posttext;

        

        db.serialize(function () {
            db.prepare('INSERT INTO posts VALUES (?,?,?,?,?)')
                .run(`${NewP.id}`, `${NewP.title}`, `${NewP.admin}`, `${NewP.datum}`, `${NewP.text}`);
        })

        res.render('messagepage', { newPostMessage, username });
    }
}