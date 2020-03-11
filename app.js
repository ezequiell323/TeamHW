const Manger = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const question = require("./lib/question");


const render = require("./lib/htmlRenderer");
start()
function start() {
    inquirer.prompt(question.manager).then(function (data) {
        menu()
    })
}



function menu() {
    inquirer.prompt(question.addEmployee).then(function (data) {
        switch(data.choices){
            case "Engineer":
                console.log("test")
        }
    })
}




