const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const question = require("./lib/question");
var emp = []

const render = require("./lib/htmlRenderer");

start()
function start() {
    inquirer.prompt(question.manager).then(function (data) {
        var test = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNumber)
        emp.push(test)

        menu()
    })
}



function menu() {
    inquirer.prompt(question.addEmployee).then(function (responce) {
        switch (responce.choices) {
            case "Engineer":
                inquirer.prompt(question.engineer).then(function (data) {
                    var eng = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGitHub)
                    emp.push(eng)
                    menu()
                })
                break;
            case "Intern":
                inquirer.prompt(question.intern).then(function (data) {
                    var int = new Intern(data.managerIntern, data.internId, data.internEmail,data.internSchool)
                    emp.push(int)
                    menu()
                })
                break;
            case "Done":
                console.log(emp)
                var test = render(emp)
                fs.writeFile("team.html",test, err => {
                    if (err) {
                        throw err;
                    }

                })
                break;


        }
    })
}






