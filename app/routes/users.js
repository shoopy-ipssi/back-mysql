const bodyParser = require('body-parser');

module.exports = function (app, db) {


    app.use(bodyParser.json());
    //Create User
    app.post('/createuser', (req, res) => {
        let requestBody = req.body;
        let request = requestBody
        let sql = 'INSERT INTO users SET ?';
        console.log(requestBody);
        let query = db.query(sql, requestBody, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        })
    })
    app.post('/login', (req, res) => {
        let requestBody = req.body;
        let request = requestBody
        let sql = `SELECT email, id, password, isActive FROM users WHERE email = '${request.email}' AND password = '${request.password}'`;
        console.log(requestBody);
        let query = db.query(sql, requestBody, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        })
    })
    //GET USERS 
    app.get('/users', (req, res) => {
        let sql = 'SELECT * FROM users';
        let query = db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        })
    })

    //GET ONE USER
    app.get('/user', (req, res) => {
        let request = req.query
        let sql = `SELECT * FROM users WHERE id = ${request.userID} or username like '%${request.username}%'`;
        let query = db.query(sql, (err, result) => {
            if (err) throw err;
            console.log('Hello');
            res.send(result);
        })
    })
    app.get('/userByMail', (req, res) => {
        let requestBody = req.query
        let sql = `SELECT * FROM users WHERE email = '${requestBody.email}'`
        let query = db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result)
            res.send(result)
        })
    })
    // Update USER
    app.put('/updateuser/:id', (req, res) => {
        let requestBody = req.body;
        let sql = `UPDATE users SET ? WHERE id = ${req.params.id}`;
        let query = db.query(sql, requestBody, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(true);
        })
    })

    //Delete USER

    app.delete('/deleteuser/:id', (req, res) => {

        let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
        let query = db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('data deleted...');
        })
    })

    // Find One

    app.post('/checkuser', (req, res) => {
        let requestBody = req.body;
        let sql = `SELECT (SELECT COUNT(*) FROM users WHERE email = '${req.body.email}') AS email, (SELECT COUNT(*) FROM users WHERE username = '${req.body.username}') as username`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result)
            res.send(result)
        })
    })
}
