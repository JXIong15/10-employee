const managerQ = require("../questions/manager-questions.js");
const Manager = require("../library/Manager.js");
const engineerQ = require("./questions/engineer-questions.js");
const Engineer = require("../library/Engineer.js");
const internQ = require("../questions/intern-questions.js");
const Intern = require("../library/Intern.js");
const Employee = require("../library/Employee.js");
const { TestScheduler } = require("@jest/core");

test("Can set name via constructor arguments", () => {
    const name = "Tony";
    const e = new Employee(name);
    expect(e.name).toBe(name);
})

test("Can set ID via constructor arguments", () => {
    const name = "Tony";
    const e = new Employee(id);
    expect(e.id).toBe(id);
})

test("Can set name via constructor arguments", () => {
    const name = "Tony";
    const e = new Employee(name);
    expect(e.name).toBe(name);
})

