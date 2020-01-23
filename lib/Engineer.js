// The Engineer class `extends` from Employee, and should have these additional properties/behaviors:
const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(name, id, github) {
        super(name, id, "Engineer")
        this.github = github
    }
    getGithub = function() {
        return this.github
    }
    getRole = function() {
        return 'Engineer'
    }
}

module.exports = Engineer;
// github (GitHub username)
// getGithub()
// getRole() (Overridden to return 'Engineer')