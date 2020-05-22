const bodyParser = require('body-parser');

module.exports = function (app, db) {
    app.use(bodyParser.json())

    // GET All Scenarios
    app.get('/scenarios', (req, res) => {
        let sql = 'SELECT * FROM scenarios';

        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result)
        })
    })


    //GET ONE Scenario
    app.get('/scenario', (req, res) => {
        let request = req.query;
        let sql = `SELECT * FROM scenarios WHERE id = ${req.params.id}`;
        let query = db.query(sql, requestBody, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('data retrieved...');
        })
    })

    // CREATE scenario
    app.post('/scenarios', (req, res) => {
        let requestBody = req.body;
        let sql = 'INSERT INTO scenarios SET ?';
        let query = db.query(sql, requestBody, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('data added...');
        })
    })


    //UPDATE Scenario
    app.put('/scenarios/:id', (req, res) => {
        let requestBody = req.body;
        let sql = `UPDATE scenarios SET ? WHERE id = ${req.params.id}`
        let query = db.query(sql, requestBody, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('data updated..')
        })
    })


    //DELETE scenario
    app.delete('/deletescenarios/:id', (req, res) => {

        let sql = `DELETE FROM scenarios WHERE id = ${req.params.id}`;
        let query = db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send('scenario deleted..');
        })
    })
}