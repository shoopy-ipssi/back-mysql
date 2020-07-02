const bodyParser = require('body-parser');

module.exports = function (app, db) {
    app.use(bodyParser.json());

    // get all saves
    app.get('/saves', (req, res) => {
        let sql = `SELECT * FROM saves WHERE id_user = '${req.query.iduser}'`;
        console.log(sql);
        db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send(result);
        })
    })
    //get one save
    app.get('/save', (req, res) => {
        let sql = `SELECT * FROM saves WHERE id_user = '${req.body.iduser}' AND id_step = '${req.body.idstep}'`;
        db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send(result);
        })
    })

    // ADD one save
    app.post('/save', (req, res) => {
        let requestBody = req.body;
        console.log(requestBody)
        let sql = `INSERT INTO saves SET ?`;
        db.query(sql, requestBody, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send({id : result.insertId});
        })
    })

    // UPDATE save
    app.put('/save/:id', (req, res) => {
        let requestBody = req.body;
        let sql = `UPDATE saves SET ? WHERE id_save = '${req.params.id}'`;
        db.query(sql, requestBody, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send(result);
        })
    })

    // DELETE save
    app.delete('/save/:id', (req, res) => {
        let sql = `DELETE FROM saves WHERE id_saves = '${req.params.id}'`;
        db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send(result);
        })
    })
}
