const bodyParser = require('body-parser');

module.exports = function (app, db) {


    app.use(bodyParser.json());
    //GET POTENTIAL FRIENDS
    app.get('/potential', (req, res) => {
        let requestBody = req.query
        let sqlquery = `CALL GET_POTENTIAL_FRIENDS (${requestBody.userID})`
        let query = db.query(sqlquery, (err, result) => {
            if (err) throw err;
            res.send(result[0])
        })
    })
    //GET FRIENDS
    app.get('/friends', (req, res) => {
        
        let requestBody = req.query
        console.log(requestBody)
        let sqlquery = `CALL GET_FRIENDS (${requestBody.userID})`
        let query = db.query(sqlquery, (err, result) =>{
            if (err) throw err;
            res.send(result[0])
        })
    });
    app.get('/friend', (req, res) => {
        let requestBody = req.query
        let sqlquery = `CALL GET_SPEC_FRIEND (${requestBody.userID}, ${requestBody.idFriend})`
        let query = db.query(sqlquery, (err, result) =>{
            if (err) throw err;
            res.send(result)
        })
    });
    //GET RECEIVED INVITATION
    app.get('/recieve_invitation', (req, res) => {
        let requestBody = req.query
        let sqlquery = `CALL GET_INVITATION (${requestBody.userID})`;
        let query = db.query(sqlquery, (err, result) => {
            if (err) throw err;
            res.send(result) 
        })
 
    });
    //GET SENDED INVITATION
    app.get('/send_invitation' ,(req, res) => {
        let requestBody = req.query
        let sqlquery = `CALL GET_SEND (${requestBody.userID})`
        
        let query = db.query(sqlquery, (err, result) => {
            if (err) throw err;
            res.send(result[0][0]) 
        }) 

    });
    //GET ALL RELATION
    app.get('/all_rel', (req, res) => {
        let requestBody = req.query
        let sqlquery = `CALL GET_ALL_RELATION (${requestBody.userID})`
        let query = db.query(sqlquery, (err, result) => {
            if (err) throw err;
            res.send(result[0][0])
        })  
    })

    //POST SEND INVITATION
    app.post('/send_invitation', (req, res) => {
        console.log(req)
        let requestBody = req.body;
        let sqlquery = `CALL SEND_FRIEND_REQUEST(${requestBody.userID}, ${requestBody.idFriend})`
        let query = db.query(sqlquery, (err, result) => {
            if (err) throw err;
            res.send(result[0][0]);
        });
    })
    //POST RESPONSE INVITATION
    app.post('/recieve_invitation', (req, res) => {
        let requestBody = req.body;
        let sqlquery = ''
        if (requestBody.typeResponse == 'accept'){
            console.log('Accepting invitation'); 
             sqlquery = `ACCEPT_FRIEND_REQUEST`;
        }
        if (requestBody.typeResponse == 'refuse'){
            console.log('Refusing invitation');
            sqlquery = `REFUSE_FRIEND_REQUEST`;
        }
        let query = db.query(`CALL ${sqlquery} (${requestBody.userID}, ${requestBody.idFriend})`, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    })
} 