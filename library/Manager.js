const Employee = require("./Employee.js");
class Manager extends Employee {
    constructor (name, id, email, number) {
        super(name, id, email);
        this.number = number;
    }
    getNumber() {
        return this.number;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Manager;