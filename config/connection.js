var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'g8r9w9tmspbwmsyo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'djz0sbzyru7avmsq',
    password: "nwl8xzf3z5jouui5",
    database: 'evf3tgaindz0vzm4',
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;