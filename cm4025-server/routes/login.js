var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI;


// POST method route
router.post('/', async (req, res) => {
    MongoClient.connect(url, async function (err, database) {
            var dbase = database.db("mydb");
            var users = await dbase.collection('users').findOne({'username': req.body.username})


            if (users !== null && users.password === req.body.password){
                console.log('login', users.username)
                req.session.loggedinas = users.username;
                console.log(req.session.loggedinas);
                return res.json({success: true, redirectUrl: '/landing'});
            }
            else{
                console.log("failed login")
                return res.json({success: false});
            }
        });
});

module.exports = router;