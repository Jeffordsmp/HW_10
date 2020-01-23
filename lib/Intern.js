// The Intern class `extends` from Employee, and should have these additional properties/behaviors:
const Employee = require("./Employee")

class Intern extends Employee{
    constructor(name, id, school) {
        super(name, id, "Intern")
        this.school = school
    }
    getSchool = function() {
        return this.school
    }
    getRole = function() {
        return 'Intern'
    }
}

module.exports = Intern;
// school
// getSchool()
// getRole() (Overridden to return 'Intern')