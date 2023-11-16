// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkDown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'Please give the application a name',
    name: 'title',
},
{
    type: 'input',
    message: 'Please list all authors',
    name: 'authors',
},
{
    type: 'input',
    message: 'Please describe the use case of the application',
    name: 'description',
},
{
    type: 'input',
    message: 'Please explain installation process',
    name: 'install',
},
{
    type: 'input',
    message: 'Please describe how to report issues',
    name: 'issues',
},
{
    type: 'input',
    message: 'Please list how to make contributions',
    name: 'contributions',
},
{
    type:
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
