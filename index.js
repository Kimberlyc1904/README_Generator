// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const renderLicenseBadge = require('./utils/generateMarkdown')
const renderLicenseSection = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
},
{
    type: 'input',
    message: 'Description',
    name: 'description,'
},
{
    type: 'input',
    message: 'Table of Contents',
    name: 'tableOfContents',
},
{
    type: 'input',
    message: 'Installation',
    name: 'installation',
},
{
    type: 'input',
    message: 'Usage',
    name: 'usage',
},
{
    type: 'list',
    message: 'Select License',
    name: 'license',
    choices:["MIT", "Apache 2.0", "GPL 3.0", "None"]
},
{
    type: 'input',
    message: 'Test',
    name: 'test',
},
{
    type: 'input',
    message: 'Contributing',
    name: 'contributing',
},
];


// TODO: Create a function to write README file
function writeToFile(data) {
  
     if (data.license === 'NONE') {
        data.license = renderLicenseSection(data.license);
        const license = ""
     }
        const license = "## License"
        const newData = generateMarkdown(data, license)
        fs.writeFileSync('README.md', newData);
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
