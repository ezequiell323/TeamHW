const question = module.exports = {

    manager: [
        {
            type: "input",
            name: "managerName",
            message: "Please enter your name"
        },
        {
            type: "input",
            name: "managerID",
            message: "Please enter your Id"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Please enter your E-Mail"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "Please enter your Office Number"
        },

    ],
    engineer: [
        {
            type: "input",
            name: "engineerName",
            message: "Please enter your name"
        },
        {
            type: "input",
            name: "engineerID",
            message: "Please enter your Id"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Please enter your E-Mail"
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "Please enter your GitHub"
        },

    ],
    intern: [
        {
            type: "input",
            name: "managerIntern",
            message: "Please enter your name"
        },
        {
            type: "input",
            name: "internId",
            message: "Please enter your Id"
        },
        {
            type: "input",
            name: "internEmail",
            message: "Please enter your E-Mail"
        },
        {
            type: "input",
            name: "internSchool",
            message: "Please enter your School"
        },

    ],
    addEmployee:[
        {
            type:"list",
            name:"choices",
            message:"What would you like to add?",
            choices:[
                "Engineer",
                "Intern",
                "Done"
            ]

        }
    ]
}

