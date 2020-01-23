// The Manager class `extends` from Employee, and should have these additional properties/behaviors:
const Employee = require("./Employee")

class Manager extends Employee{
    constructor(name, id, officeNumber) {
        super(name, id, "Manager")
        this.officeNumber = officeNumber
    }
    getRole = function() {
        return 'Manager'
    }
}

module.exports = Manager;
// officeNumber
// getRole() (Overridden to return 'Manager')