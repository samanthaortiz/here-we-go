let dbConfig = require("./dbConfig.js");
let db = require('bookshelf')(knex);

let knex = require('knex')({
  client: 'mysql',
  connection: {
    host: dbConfig.ip;
    user: process.env.username || dbConfig.username
    password: process.env.password || dbConfig.password
    database: process.env.name || dbConfig.name
    charset: 'utf8'
    // host     : "mysqlcluster14.registeredsite.com",
    // user     : "shadyadmin",
    // password : "!Qaz2wsx3edc",
    // database : "shadycrows",
    // charset  : 'utf8'
  }
});


module.exports = db;