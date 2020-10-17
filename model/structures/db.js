'user strict';

/*var mysql = require('mysql2');

//local mysql db connection, esto sin sequelize
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'tarjetero'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;*/

const Sequelize = require('sequelize');

const sequelize = new Sequelize('tarjetero', 'root', '', {
    host:'localhost',
    dialect:'mysql'
});

module.exports = sequelize;
