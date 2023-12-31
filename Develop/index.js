// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkDown = require('./utils/generateMarkdown')    
const path = require('path')    
   
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'Please give the application a name.',
    name: 'title',
},
{
    type: 'input',
    message: 'Please list all authors.',
    name: 'authors',
},
{
    type: 'input',
    message: 'Please give a description of the application.',
    name: 'description',
},
{
    type: 'input',
    message: 'Please explain installation process.',
    name: 'install',
},
{
    type: 'input',
    message: 'Please describe how to report issues.',
    name: 'issues',
},
{
    type: 'input',
    message: 'Please list how to make contributions.',
    name: 'contributions',
},
{
    type: 'input',
    message: 'Please list all technologies used on this project.',
    name: 'technologies',
},
{
    type: 'input',
    message: 'What is your Github username?',
    name: 'github'
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
},
{
    type: 'checkbox',
    message: 'Choose which license applies to your repository.',
    name: 'license',
    choices: ['MIT', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU General Public License 2.0',
                'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 
            'The Unlicense']
},
];         


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
    .then((responses) => {      
        console.log('Generating README file')
        writeToFile('./README.md', generateMarkDown({      
            ...responses
        }))
    })
}


// Function call to initialize app
init();
