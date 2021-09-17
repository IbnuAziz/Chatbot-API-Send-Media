require('dotenv').config()

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_DB_PASSWORDHOS,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
  });

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connection.end(function(err) {
    if (err) {
      return console.log('error:' + err.message);
    }
    console.log('Close the database connection.');
});

module.exports = connection

