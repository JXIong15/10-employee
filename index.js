const { prompt } = require("inquirer");
const managerQ = require("./questions/manager-questions.js");
const Manager = require("./library/Manager.js");
const engineerQ = require("./questions/engineer-questions.js");
const Engineer = require("./library/Engineer.js");
const internQ = require("./questions/intern-questions.js");
const Intern = require("./library/Intern.js");
const inquirer = require("inquirer");

// Array of the team members
const team = [];

function askManager() {
    prompt(managerQ).then(answers => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.number);
        team.push(manager);
    });
}

function askEngineer() {
    prompt(engineerQ).then(answers => {
        console.log(answers)
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.username);
        team.push(engineer);
    });
}

function askIntern() {
    prompt(internQ).then(answers => {
        console.log(answers)
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
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
    inquirer
        .prompt({
            type: "list",
            name: "add",
            message: "Would you like to add another employee?",
            choices: ["Yes", "No"]
        })
        .then((response) => {
            if (response == "Yes") {
                init();
            }
            else {
                return;
            }
        })
}

function init() {
    inquirer
        .prompt({
            type: "list",
            name: "role",
            mesage: "What is the employee role?",
            choices: ['Manager', 'Engineer', 'Intern']
        })
        .then((response) => {renderEmployeeInfo(response)
    })
    // addMore();
}


init();


// ask what the employee type is
// use a switch statement to call a diff func based on employee type
// No external CSS file.