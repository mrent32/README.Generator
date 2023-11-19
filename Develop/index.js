// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkDown = require('./utils/generateMarkdown')
const path = require('path')

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
    type: 'input',
    message: 'Please list all technologies used on this project',
    name: 'technologies',
},
{
    type: 'input',
    message: 'What is your Github username?',
    name: 'github'
}
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
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
    // .then(responses) 
    //     writeToFile('./utils/', generateMarkDown({
    //        ...responses
           
    //     }))
        // .then() 
        //     fs.readFile('data', 'utf8', (error, data)=>
        //     error ? console.error(error) : console.log(data)
//             )
}


// Function call to initialize app
init();
