// TODO: Include packages needed for this project
const fs = require('fs');
const inquirer = require('inquirer');
const { generate } = require('rxjs');
const generateMarkdown = require ('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const promptREADME = () => {
    console.log(`
    ==================
    BEGIN A NEW README
    ==================
    `);
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your project name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project:',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter the project description!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions for your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information for your project?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What licenses did you use for your project?',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the contributing guidelines for your project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions for your project?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('Please enter your GitHub username!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter your email!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project.',
            validate: linkInput => {
                if (linkInput) {
                  return true;
                } else {
                  console.log('Please enter the link to your deployed project!');
                  return false;
                }
              }
        }
    ])
};

// promptREADME().then(answers => console.log(answers));

// TODO: Create a function to write README file
promptREADME()
    .then(readmeData => {
        const pageReadme = generateMarkdown(readmeData);

        fs.writeFile('./dist/README.md', pageReadme, err => {
            if (err) throw new Error(err);

            console.log('README created! Checkout README.md in this directory to see it!');
        });
    });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
