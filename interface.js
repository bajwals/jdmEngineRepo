var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "cxzaq123",
    database: "jdmEngineRepo"
});

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId + "\n");
//     readData();
// });

connection.connect(function(err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Return all engines",
            "Find engine by manufacturer",
            "Find all inline engines",
            "exit"
        ]
    }).then(function(answer) {
        switch (answer.action) {
        case "Return all engines":
            readData();
            break;
    
        case "Find engine by manufacturer":
            engineSearch();
            break;

        case "Find all inline engines":
            inlineSearch();
            break;

        case "exit":
            connection.end();
            break;
        }
        });
    };

var obj2 = []

function engineSearch() {
    inquirer.prompt({
        name: "engine",
        type: "list",
        message: "What manufacturer do you want to search engines for?",
        choices: [
            "Nissan",
            "Toyota",
            "BMW",
            "Porsche"
        ]
    }).then(function() {
        connection.query("SELECT * FROM inventory WHERE engine_configuration= inline", function(err, res) {
            if (err) { 
                throw err 
            };
        console.log(res);
        connection.end();
        });  
    });
}

function inlineSearch() {
    connection.query("SELECT * FROM inventory WHERE engine_configuration = inline", function(err, res) {
        if (err) { 
            throw err 
        };
    console.log(res);
    connection.end();
    });  
}

function readData() {
    connection.query("SELECT * FROM inventory", function(err, res) {
        if (err) { 
            throw err 
        };
    console.log(res);
    connection.end();
    });
}