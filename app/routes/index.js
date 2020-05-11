const userRoutes = require('./users');
const databaseRoutes = require('./database');

module.exports = function(app, db) {
    userRoutes(app, db);
    databaseRoutes(app, db);
}