const { prompt } = require("inquirer");
const managerQ = require("./questions/manager-questions.js");
const Manager = require("./library/Manager.js");
const engineerQ = require("./questions/engineer-questions.js");
const Engineer = require("./library/Engineer.js");
const internQ = require("./questions/intern-questions.js");
const Intern = require("./library/Intern.js");
const inquirer = require("inquirer");

// needed for generating HTML file
const generateEmployeeCards = require("./generateEmployeeCards.js");
const fs = require("fs");
const path = require("path");

// Array of the team members
const team = [];

function askManager() {
    prompt(managerQ).then(answers => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.number);
        team.push(manager);
        addMore();
    });
}

function askEngineer() {
    prompt(engineerQ).then(answers => {
        console.log(answers)
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.username);
        team.push(engineer);
        addMore();
    });
}

function askIntern() {
    prompt(internQ).then(answers => {
        console.log(answers)
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        addMore();
    });
}

function renderEmployeeInfo(data) {
    switch(data.role) {
      case "Manager": return askManager();
      case "Engineer": return askEngineer();
      case "Intern": return askIntern();
    }
  }

function addMore() {
        prompt({
            type: "list",
            name: "add",
            message: "Would you like to add another employee?",
            choices: ["Yes", "No"]
        })
        .then((response) => {
            console.log(response);
            if (response.add == "Yes") {
                init();
            }
            else {
                // writeToFile("index.html", generateEmployeeCards(team));
            }
        })
}

// Writes html card file
function writeToFile(fileName, data) {
    try {
        let rm = fs.writeFileSync(path.join(process.cwd(), fileName), data)
        console.log("Your employee card(s) has been generated!");
        return rm;
    }
    catch {
        return console.log("Employee Card Generator failed.");
    }
}

function init() {
    inquirer
        .prompt({
            type: "list",
            name: "role",
            mesage: "What is the employee role?",
            choices: ['Manager', 'Engineer', 'Intern']
        })
        .then((response) => {
            renderEmployeeInfo(response);
        })
}

init();
