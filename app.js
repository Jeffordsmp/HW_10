// Keep these lines; they're important!
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "managername",
            message: "Welcome, New Manager! What is your name?"
        }, 
        {
            message: "What is your manager ID?",
            name: "managerid"
        },
        {
            message: "What is your email?",
            name: "manageremail"
        },
        {
            message: "What is your office number?",
            name: "manageroffnum"
        },
        {
            message: "Add Some Employees",
            name: "Next",
            type: "list",
            choices: ["Engineer", "Intern"]
        }
    ]).then(function (response) {
        employees.push(new Manager(response.managername, response.managerid, response.manageremail, response.manageroffnum));
        nextEmp(response.Next)
    });
}

function nextEmp(Emp) {
    if (Emp === "Engineer") {
        newEngineer()
    } else if (Emp === "Intern") {
        newIntern()
    } else if (Emp === "I don't want to add anyone else.") {
        fs.writeFile(outputPath, render(employees), 'utf8', (err) => {
            if (err) throw err;
            console.log('Welcome to the Team!');
        })
        return;
    }
}

function newIntern() {
    inquirer.prompt([
        {
            message: "What's the intern's name?",
            name: "name"
        },
        {
            message: "What's the intern's ID?",
            name: "id"
        },
        {
            message: "What's the interns's email?",
            name: "email"
        },
        {
            message: "What's the intern's school?",
            name: "school"
        },
        {
            message: "What type of team member would you like to add?",
            name: "Next",
            type: "list",
            choices: ["Engineer", "Intern", "I don't want to add anyone else."]
        },
    ]).then(function (response) {
        employees.push(new Intern(response.name, response.id, response.email, response.school));
        nextEmp(response.Next)
    })
}

function newEngineer() {
    inquirer.prompt([
        {
            message: "What's the engineer's name?",
            name: "name"
        },
        {
            message: "What's the engineer's ID?",
            name: "id"
        },
        {
            message: "What's the engineer's email?",
            name: "email"
        },
        {
            message: "What's the engineer's GitHub handle?",
            name: "github"
        },
        {
            message: "What type of team member would you like to add?",
            name: "doNext",
            type: "list",
            choices: ["Engineer", "Intern", "I don't want to add anyone else."]
        },
    ]).then(function (response) {
        employees.push(new Engineer(response.name, response.id, response.email, response.github));
        nextEmp(response.Next)
    })
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!

promptUser()