require('dotenv').config()

const mysql = require('mysql2/promise');

const connection = async () => {
    return await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_DB_PASSWORDHOS,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE
    });
}

const getData = async (keyword) => {
    const conn = await connection()
    const [rows] = await conn.execute('SELECT message FROM replychat WHERE id = ?', [keyword]);
    if(rows.length >  0) return rows[0].message
    return false;
}

const getallData = async (keyword) => {
    const conn = await connection()
    const [rows] = await conn.execute('SELECT * FROM replychat');

    if(rows.length > 0) {
        if(keyword == 'Hai'){
            return 'rows[0]'
        }   
    }
    return false;
}

// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected!');
//   });

module.exports = {
    connection,
    getData,
    getallData
}