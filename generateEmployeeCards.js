


// Generates HTML cards
function generateEmployeeCards(data) {
    let badge = renderLicenseBadge(data.license);
    let link = renderLicenseLink(data.license);
    renderLicenseSection(data);
    console.log(`${data.name}'s card has been generated!`)
    
    return ``;
    }
  
  module.exports = generateEmployeeCards;