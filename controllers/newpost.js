const fs = require('fs');

const posts = [];
const pD = JSON.parse(fs.readFileSync('./postdata.json'));

pD.forEach(element => {
    posts.push(element)
    
});


const NewP = {
    admin: "",
    datum: "",
    title: "",
    text: ""
}

function currentDate(){
    let newDate = new Date();
    let dd = String(newDate.getDate()).padStart(2,'0');
    let mm = String(newDate.getMonth()).padStart(2,'0');
    let yyyy = newDate.getFullYear();
    newDate = `${yyyy}.${mm}.${dd}.`;
    return newDate;
}

module.exports = class NewPost {
    posting(req, res) {
        const { posttitle, postcontent } = req.body;
        const infotext = 'Adding new post was successful !'
        NewP.admin = 'admin';
        NewP.datum = currentDate();
        NewP.title = posttitle;
        NewP.text = postcontent;
        posts.push(NewP)

        fs.writeFileSync('./postdata.json', JSON.stringify(posts))

        res.render('startpage', {infotext});
    }
}