const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const dbConfig = require('./config/db.config');

app.use(bodyParser.urlencoded({extended:true}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD")
    next();
})


//Create connection to mysql
const db = mysql.createConnection({
    host     : dbConfig.HOST,
    user     : dbConfig.USER,
    database : dbConfig.DATABASE,
    port     : dbConfig.PORT
});

//Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    require('./app/routes')(app, db);
    app.listen('3000', () => {
        console.log('Server started on port 3000')
    });
});







