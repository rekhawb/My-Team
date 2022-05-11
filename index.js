const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');
const Intern = require('./Intern');
const Engineer = require('./Engineer');
const Manager = require('./manager');
const uuid = require('./uuid');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'nameMgr',
      message: 'Start building your Team. Enter Manager Name:',
      validate: (answer) => {
        if (answer === '' || answer === null) {
          return "please enter Manager Name:";
        }
        return true;
      },
    },
    {
    type: 'input',
    name: 'emailMgr',
    message: 'Enter Email ID:',
    // validating email ID input
    // user is prompted to enter valid email address if no email address is entered or doesn't contain @ .com or  not in valid format example: abc@abc.com
    validate: (answer) => {
      if (answer === '' || answer === null || (answer.indexOf('@')  < 0 || answer.indexOf('.com') < 0 || answer.length < 7 || answer.slice(-5,-6) === '@' || answer.slice(0,1) === '@'))  {
        return "please enter valid EMAIL address";
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'officeMgr',
    message: 'Enter Office Number',
// user is prompted to enter valid office number. Empty entry, nulls and strings are not accepted

    validate: (answer) => {
      if (answer === '' || answer === null || isNaN(answer)) {
        return "please enter valid office number";
      }
      return true;
    },
  },


]).then((data) => {
   const  manager = new Manager(data.nameMgr,uuid(),data.emailMgr,data.officeMgr);
    const filename = "index.html";
    fs.writeFile(filename,manager.generateHTML(),(err) => 
    err ? console.log(err): inquirer
    .prompt([
      {
        name: "nextEmployee",
        type: "confirm",
        message: "Do you want to enter Employee details?",
        
      },
    ])
    .then((answers) => {
      if(answers.nextEmployee){
        enterDetails()
      }else{
          
        const filename = "index.html";
        fs.appendFile(filename, manager.generateClosingHTML(),(err) => 
        err ? console.log(err): console.log("Thank you! File is generated. Please take a look at your Manager Team!!!")
        )
      }
    })
    )})


/***
 * call this function to enter Team member details
 * Team member cannot be added unless they have a manager.
 * A Manager can have multiple team members
 * But a team member can have only one manager
 * So Entering details for manager and Team members are in separate function calls
 * 
 * 
 */

    function enterDetails(){
        inquirer
  .prompt([

    {
        type: 'input',
        name: 'nameTeam',
        message: 'Enter Team member name:',
        validate: (answer) => {
          if (answer === '' || answer === null) {
            return "please enter a valid name:";
          }
          return true;
        },
      },
    {
    type: 'list',
    name: 'role',
    message: 'Enter role:',
    choices:['Intern','Engineer'],
   
},

  
    {
    type: 'input',
    name: 'emailTeam',
    message: 'Enter Email ID:',
    // validating email ID input
    // user is prompted to enter valid email address if no email address is entered or doesn't contain @ .com or  not in valid format example: abc@abc.com
    validate: (answer) => {
      if (answer === '' || answer === null || (answer.indexOf('@')  < 0 || answer.indexOf('.com') < 0 || answer.length < 7 || answer.slice(-5,-6) === '@' || answer.slice(0,1) === '@'))  {
        return "please enter valid EMAIL address";
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'officeTeam',
    message: 'Enter School Name:',
// user is prompted to enter valid office number. Empty entry, nulls and strings are not accepted
   when: (answers) => answers.role === 'Intern',
    validate: (answer) => {
      if (answer === '' || answer === null || !isNaN(answer)) {
        return "please enter valid School Name";
      }
      return true;
    },
  },
  // if role selected is Engineer, 
  {
    type: 'input',
    name: 'officeTeam',
    message: 'Enter GitHub Username:',
// user is prompted to enter valid office number. Empty entry, nulls and strings are not accepted
   when: (answers) => answers.role === 'Engineer',
    validate: (answer) => {
      if (answer === '' || answer === null) {
        return "please enter valid GitHub Username";
      }
      return true;
    },
  },
]).then((data) => {
    if(data.role === 'Intern'){
   const  team = new Intern(data.nameTeam,uuid(),data.emailTeam,data.officeTeam);
    const filename = "index.html";
    fs.appendFile(filename,team.generateInternHTML(),(err) => 
    err ? console.log(err): inquirer
    .prompt([
      {
        name: "nextEmployee",
        type: "confirm",
        message: "Do you want to enter Employee details?",
      },
    ])
    .then((answers) => {
        if(answers.nextEmployee){
          enterDetails();
        }else{
            const filename = "index.html";
    fs.appendFile(filename, team.generateClosingHTML(),(err) => 
    err ? console.log(err): console.log("Thank you! File is generated. Please take a look at your Team!!!")
    )
      }
      })
    )
    }else if(data.role === 'Engineer'){
        const  team = new Engineer(data.nameTeam,uuid(),data.emailTeam,data.officeTeam);
        const filename = "index.html";
        fs.appendFile(filename,team.generateEngineerHTML(),(err) => 
    err ? console.log(err): inquirer
    .prompt([
      {
        name: "nextEmployee",
        type: "confirm",
        message: "Do you want to enter Employee details?",
      },
    ])
    .then((answers) => {
        if(answers.nextEmployee){
          enterDetails();
        }else{
            const filename = "index.html";
    fs.appendFile(filename, team.generateClosingHTML(),(err) => 
    err ? console.log(err): console.log("Thank you! File is generated. Please take a look at your Team!!!")
    )
      }
      })
    )
    }
    }
)}
;

    
