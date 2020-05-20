const bodyParser = require('body-parser');
module.exports = function (app, db) {
    app.use(bodyParser.json());


// CreateDb
    app.get('/createdb', (req, res) => {
        let sql = 'CREATE DATABASE nodemysql';
        db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send('Database created...');
        });
    })

//CreateTable
//TODO: test if request parameters is usable
     app.post('/createusers', (req, res) => {
         let sql = 'CREATE TABLE `nodemysql`.`users` ( `id` INT NOT NULL AUTO_INCREMENT , `firstname` VARCHAR(255) NOT NULL , `lastname` VARCHAR(255) NOT NULL , `email` VARCHAR(255) NOT NULL, `pseudo` varchar(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;';
         db.query(sql, (err, result) => {
             if(err) throw err;
             console.log(result);
             res.send('table created...');
         })
     })
} 