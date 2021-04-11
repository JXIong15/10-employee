# 10 Object-Oriented Programming: Team Profile Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
* [Introduction](#introduction)
* [Functionality](#functionality)
* [Tasks Completed](#tasks-completed)
* [Technologies Used](#technologies-used)
* [Installations](#installations)
* [Future Idea](#future-idea)
* [Demo](#demos)
* [Sources](#sources)
* [License](#license)


 ## Introduction
 Uses Node, Inquier, Jest, and the command line to generate a employee cards for the manager's team from the user-specified inputs.
 * GitHub Repository: https://github.com/JXIong15/10-employee
 * Video Demonstration: 


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
* Created a "library", "_tests_", and a "questions" folder. Each one contains an Engineer, Manager, and Intern file. Libary and _tests_ both have an Employee file as well.
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
<p align="center">
    <img src="./assets/app-demo" width="100% height="100%" stylealt="app demo"/> 
    <img src="./assets/test-demo" width="100% height="100%" stylealt="test demo"/> 
</p>


## Sources
* Inquirer Package: https://www.npmjs.com/package/inquirer
* Jest Package: https://www.npmjs.com/package/jest


## License
Licensed under the [MIT License](LICENSE).

<p align="center">© 2021 Jou Xiong, Trilogy, Northwestern Coding Bootcamp</p>


____________________________________


## Your Task

Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.

Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.



The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.



## Grading Requirements

This homework is graded based on the following criteria: 

### Deliverables: 15%

* A sample HTML file generated using the application must be submitted.

* Your GitHub repository containing your application code.


### Walkthrough Video: 32%

* A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.

* The walkthrough video must show all four tests passing from the command line.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate a generated HTML file that matches the user input.


### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

	* Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).

	* Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.

  * The application must have `Employee`, `Manager`, `Engineer`, and `Intern` classes.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality readme with description and a link to a walkthrough video.

## Review

You are required to submit the following for review:

* A walkthrough video that demonstrates the functionality of the application and passing tests.

* A sample HTML file generated using your application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
