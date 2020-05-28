const userRoutes = require('./users');
const databaseRoutes = require('./database');
const friendRoutes = require('./friend');
const scenarioRoutes = require('./scenarios');
const saveRoute = require('./saves');
const mailjet = require('./mailjet');

module.exports = function(app, db) {
    userRoutes(app, db);
    databaseRoutes(app, db);
    friendRoutes(app, db);
    scenarioRoutes(app, db);
    saveRoute(app, db);
    mailjet(app, db);
}
