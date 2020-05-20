const userRoutes = require('./users');
const databaseRoutes = require('./database');
const friendRoutes = require('./friend');

module.exports = function(app, db) {
    userRoutes(app, db);
    databaseRoutes(app, db);
    friendRoutes(app, db);
}