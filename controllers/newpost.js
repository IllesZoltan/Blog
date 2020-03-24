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

function currentDate(){
    let newDate = new Date();
    theID = newDate.valueOf();
    let dd = String(newDate.getDate()).padStart(2,'0');
    let mm = String(newDate.getMonth()).padStart(2,'0');
    let yyyy = newDate.getFullYear();
    newDate = `${yyyy}.${mm}.${dd}.`;

    return newDate;
}

module.exports = class NewPost {
    posting(req, res) {
        const { posttitle, posttext } = req.body;
        const infotext = 'Adding new post was successful !'
        NewP.admin = 'admin';
        NewP.datum = currentDate();
        NewP.id = theID;
        NewP.title = posttitle;
        NewP.text = posttext;

        console.log('title:   ',posttitle,posttext);
        


        // db.serialize(function(){
        //     db.prepare('INSERT INTO posts VALUES (?,?,?,?,?)')
        //       .run(`${NewP.id}`,`${NewP.title}`,`${NewP.admin}`,`${NewP.datum}`,`${NewP.text}`);
        // })

        res.render('startpage', {infotext});
    }
}