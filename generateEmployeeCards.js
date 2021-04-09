// Included packages needed for this application
const fs = require("fs");
const path = require("path");
const Manager = require("./library/Manager.js");
const Engineer = require("./library/Engineer.js");
const Intern = require("./library/Intern.js");

// unique icon for each role
function iconRole(employee) {
    switch(employee) {
        case "Manager": return "📋";
        case "Engineer": return "💻";
        case "Intern": return "🎓";
    } 
}

// the unique data for each role
function lastQ(employee) {
    switch(employee) {
        case "Manager": return employee.number;
        case "Engineer": return employee.username;
        case "Intern": return employee.school;
    } 
}

function makeCard(employee) {
    let icon = iconRole(employee);
    let lastInfo = lastQ(employee);
    return `<div class="card" style="background-color: rgb(240, 240, 240); box-shadow: 5px 5px 5px gray; margin-top: 20px;">
            <div class="card-header" style="background-color: rgb(86, 86, 255); color: white">
                <h4>${employee.name}</h4>
                ${icon}${employee}
            </div>
            <ul class="list-group list-group-flush" style="margin: 20px; border: solid; border-color: rgb(202, 202, 202); border-width: 1px;">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: ${employee.email}</li>
                <li class="list-group-item">${lastInfo}</li>
            </ul>
            </div>`;
}

// Generates HTML cards
function generateEmployeeCards(team) {
    team.forEach(makeCard(team.constructor.name));

    let head = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <title>My Team</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>
            <body>
                <h1 style="text-align: center; background-color: rgb(253, 84, 84); color: white; padding: 20px;">My Team</h1>
                    <div class="justify-content-around align-content-center row" style="margin-left: 20px; margin-right: 20px;">`

    console.log(`${team.name}'s card has been generated!`)
    
    return head + team.forEach(makeCard(team.constructor.name)) + 
            `</div>
        </body>
    </html>`;
    }
  
  module.exports = generateEmployeeCards;