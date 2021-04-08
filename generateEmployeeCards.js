// Included packages needed for this application
const fs = require("fs");
const path = require("path");
const Manager = require("./library/Manager.js");
const Engineer = require("./library/Engineer.js");
const Intern = require("./library/Intern.js");

function makeCard(employee) {
    let card = `
    ${employee.name}
    ${employee}
    ID: ${employee.id}
    Email: ${employee.email}
    
    `

}

// Generates HTML cards
function generateEmployeeCards(team) {
    team.forEach(makeCard(team.constructor.name));

    let head = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <title>Weather Dashboard</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>`

    console.log(`${team.name}'s card has been generated!`)
    
    return head + team.forEach(makeCard(team.constructor.name)) + `</body></html>`;
    }
  
  module.exports = generateEmployeeCards;