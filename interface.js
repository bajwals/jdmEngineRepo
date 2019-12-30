var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "cxzaq123",
    database: "jdmEngineRepo"
});

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

var engineSearch = () => {
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
    }).then((answers) => {
        connection.query("SELECT * FROM jdmEngineRepo.inventory WHERE manufacturer = \"" + answers.engine + "\"", function(err, res) {
            if (err) { 
                throw err 
            };
        console.log(res);
        connection.end();
        });  
    });
}

function inlineSearch() {
    connection.query("SELECT * FROM inventory WHERE engine_configuration = 'inline'", function(err, res) {
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
    engineArray = res;
    console.log(engineArray)
    connection.end();
    });
}

var engineArray = []

var engine = {
    id: 11,
    manufacturer: 'Nissan',
    engine_code: 'SR20DET',
    displacement_in_cm3: 2000,
    engine_configuration: 'Inline',
    number_of_cylinders: 4,
    aspiration: 'Single Turbocharged',
    maximum_power: 300,
    price: 1000,
    in_stock: 8
}
