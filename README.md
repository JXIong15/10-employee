# 10 Object-Oriented Programming: Team Profile Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
* [Introduction](#introduction)
* [Functionality](#functionality)
* [Tasks Completed](#tasks-completed)
* [Technologies Used](#technologies-used)
* [Installations](#installations)
* [Demo](#demos)
* [Sources](#sources)
* [License](#license)


 ## Introduction
 Uses Node, Inquier, Jest, and the command line to generate a employee cards for the manager's team from the user-specified inputs.
 * GitHub Repository: https://github.com/JXIong15/10-employee
 * App Demonstration: https://drive.google.com/file/d/1aIvexVPLv0fNYhxhRUbo314YsrOxEjaT/view
  * HTML Demonstration: https://drive.google.com/file/d/1ybL3uqKS64OgW7tM9ZE1uXvXf5EliXBA/view
  * Tests Demonstration: https://drive.google.com/file/d/1uyzILccmIV30b2TPJxF5O80SlY-bFXh7/view
* [Sample HTML](index.html)


## Functionality
* When the user types "node index.js" in the "/10-employee" directory, then the program is initiated.
* The user, who is the manager, is then asked a series of questions about themself: name, email, id, and office number.
* The manager is then asked if they want to add more employees.
  * If "No", then the program generates an HTML doc containing the Manger's employee card
  * If "Yes", then the program asks the manager if they want to add an Intern or an Engineer
* When an Engineer is selected, the app asks for the Engineer's name, email, id, and GitHub username.
* When an Intern is selected, the app asks for the Intern's name, email, id, and school name.
* The manager is continuously prompted after each employee so that they can add their whole team. 
  * The moment the Manager chooses, "No" to adding more employees, then the HTML document
  containing each team member's employee card is generated from the generateEmployeeCards.js file.
* For each employee and employee role, a class.js and questions.js file was created.


## Tasks Completed
* In the 10-employee directory, downloaded the inquirer and jest packages using npm.
* Created a "library", "tests", and a "questions" directories. Each one contains an Engineer, Manager, and Intern file. Libary and _tests_ both have an Employee file as well.
  * Each Questions.js file contains questions for each role
  * Each role in the "library" contains constructor classes
  * Each test.js file contains tests for the constructor classes for each role
* In the index.js file:
	* included all of the required packages and other js files needed
	* created an empty array to hold the team members
  * created a function to run when initiated by the user. This function prompts for the Manager's information.
    * addMore() function is created to give the Manager the option to add more team members.
    * if more team members are desired, then an employeeRole() function prompts the Manager to choose the employee role and then asks the questions pertaining to the employee's information
      * created functions for 'intern' and 'engineer' questions respectively
        * all Manager, Engineer, and Intern question functions use their respective role constructors to create the new employee for that role
    * once the manager decides not to add more employees, then a writeToFile() function creates an HTML document by passing the 'team' array into the generateEmployeeCards() function
* in the generateEmployeeCards.js file, which is prompted by the index.js generateEmpployeeCards() function:
  * the generateEmployeeCards(team) function uses a forEach loop to iterate through each employee in the 'team' array
    * the empployee is then passed into a makeCard() function, which creates and returns an employee card for them
      * an iconRole() function returns the employee role to generate the correct icon for the employee
      * a lastQ() function uses the employee role to return the unique information for the role
    * the generateEmployeeCards() function returns a Template Literal containing the code for the HTML file. 
      * This code is returned to the writeToFile() function in the index.js file, which then genereates an HTML file with the code.
* once the HTML file is generated, the application closes. The user can then click on the HTML file and open it to see the different cards for their employee(s).


## Installations
* Download [Node and npm](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs)
* Then, download the Inquier Package by typing, "npm install inquirer" in command line
* Then, download the Jest package by typing, "npm install jest" in the command line


## Technologies Used
* JavaScript (main code)
* HTML (the employee cards)
* Node
  * Inquirer (for asking questions to the user)
  * Jest (for testing)
* Terminal/Command Line (to interact with the questions)
* Txt File (License)


## Demos
App Demo: https://drive.google.com/file/d/1aIvexVPLv0fNYhxhRUbo314YsrOxEjaT/view
HTML Demo:
   <p align="center"><img src="./assets/html-demo.gif" width="100% height="100%" stylealt="html demo"/></p>
Test Demo:
   <p align="center"><img src="./assets/test-demo.gif" stylealt="test demo"/></p>



## Sources
* Inquirer Package: https://www.npmjs.com/package/inquirer
* Jest Package: https://www.npmjs.com/package/jest


## License
Licensed under the [MIT License](LICENSE).

<p align="center">© 2021 Jou Xiong, Trilogy, Northwestern Coding Bootcamp</p>
