const { prompt } = require("inquirer");
const managerQ = require("./questions/manager-questions.js");
const Manager = require("./library/Manager.js");
const team = [];

function askManager() {
    prompt(managerQ).then(answers => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.number);
        team.push(manager);
    });
}








// ask what the employee type is
// use a switch statement to call a diff func based on employee type
// No external CSS file.