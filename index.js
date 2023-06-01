// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
},
{
    type: 'input',
    message: 'Provide a short description explaining the what, why and how of your project',
    name: 'description,'
},
{
    type: 'input',
    message: 'Table of Contents',
    name: 'tableOfContents',
},
{
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation',
},
{
    type: 'input',
    message: 'Provide instructions and examples for use',
    name: 'usage',
},
{
    type: 'input',
    message: 'Enter License Information',
    name: 'license',
},
{
    type: 'input',
    message: 'Enter test examples',
    name: 'test',
},

];


// TODO: Create a function to write README file
function writeToFile(data) {
  
        //console.log(generateMarkdown(data))
        const newData = generateMarkdown(data)
        fs.writeFileSync('README.txt', JSON.stringify(data));
        console.log('README file Generated!');
    };


// TODO: Create a function to initialize app
async function init() {
    const answers = await
    inquire.prompt(questions)
    writeToFile(answers)
};

// Function call to initialize app
init();
