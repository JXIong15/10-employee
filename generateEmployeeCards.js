// unique icon for each role
function iconRole(employee) {
    switch(employee.getRole()) {
        case "Manager": return "📋";
        case "Engineer": return "💻";
        case "Intern": return "🎓";
    } 
}

// the unique data for each role
function lastQ(employee) {
    switch(employee.getRole()) {
        case "Manager": return ("Office Number: " + employee.getNumber());
        case "Engineer": 
            return (`GitHub: <a href="https://github.com/${employee.getUsername()}" target="_blank">${employee.getUsername()}</a>`);
        case "Intern": return ("School: " + employee.getSchool());
    } 
}

// individual employee cards
function makeCard(employee) {
    let icon = iconRole(employee);
    let lastInfo = lastQ(employee);
    return `<div class="card" style="background-color: rgb(240, 240, 240); box-shadow: 5px 5px 5px gray; margin-top: 20px;">
                <div class="card-header" style="background-color: rgb(86, 86, 255); color: white">
                    <h4>${employee.getName()}</h4>
                    ${icon}  ${employee.getRole()}
                </div>
                <ul class="list-group list-group-flush" style="margin: 20px; border: solid; border-color: rgb(202, 202, 202); border-width: 1px;">
                    <li class="list-group-item">ID: ${employee.getID()}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">${lastInfo}</li>
                </ul>
            </div>`;
}

// Generates HTML file
function generateEmployeeCards(team) {
    let cards ="";
    team.forEach(function(employee) {
        cards += makeCard(employee);
    })

    return (`<!DOCTYPE html>
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
                    <div class="justify-content-around align-content-center row" style="margin-left: 20px; margin-right: 20px;">
                    ${cards}
            </div>
        </body>
    </html>`
    )
}
  
  module.exports = generateEmployeeCards;