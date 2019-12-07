var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "cxzaq123",
    database: "jdmEngineRepo"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readData();
});

function readData() {
    connection.query("SELECT * FROM inventory", function(err, res) {
        if (err) { 
            throw err 
        };
    console.log(res);
    connection.end();
    });
}
