// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateDirectory = require("./src/page-conatiner.js");

// lib modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// array set up for answesr to questions
const newStaffData = [];

// object to ask questions
const questions = async () => {
  const answers = await inquirer
    .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What id number would you like?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "list",
      message: "What is your role?",
      name: "role",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ])

  // if manager is selected prompt with further questions for role
  if (answers.role === "Manager"){
    const managerAns = await inquirer
      .prompt([
        {
         type: "input",
         message: "What is your office number?",
         name: "officeNumber",
        },
      ])
      const newManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        managerAns.officeNumber 
      );
      newStaffData.push(newManager);

  // if engineer selected, prompt with further questions
  } else if (answers.role === "Engineer") {
    const githubAns = await inquirer
      .prompt([
        {
         type: "input",
         message: "What is your GitHub user name?",
         name: "github",
        },
      ])
      const newEngineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        githubAns.github
      );
      newStaffData.push(newEngineer);

  // if intern selected ...
  } else if (answers.role === "Intern") {
    internAns = await inquirer
      .prompt([
        {
          type: "input",
          message: "What program or school are you from?",
          name: "school",
        },
      ])
      const newIntern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        internAns.school
      );
      newStaffData.push(newIntern);
   }
};  

//  ask questions function here!! and 
//  prompt what to do next, add new member 
//  or create directory
async function askQuestions() {
  await questions()

  const addMemberAns = await inquirer
    .prompt([
      {
        name:"addMember",
        type: "list",
        choices: ["Add a new member", "Create directory"],
        message: "Would you like to add a new member or create a directory?"
      }
    ])
    if (addMemberAns.addMemebr === "Add a new member") {
      return askQuestions()
    }
    return createDirectory()
}

// Get answers from user in the command line
askQuestions();

// Create the directory and then populate with data
function createDirectory() {
  fs.writeFileSync(
    "./dist/index.html",
    generateDirectory(newStaffData),
    "wtf-8"
  )
}
