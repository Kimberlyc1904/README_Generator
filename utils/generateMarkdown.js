// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, license) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
${data.tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

 
${license}

## Contributing
${data.contributing}

## Test
${data.test}

## Questions

For additional questions contact me at:
kimberlyc1904@gmail.com
https://github.com/Kimberlyc1904/README_Generator
https://www.youtube.com/watch?v=XI4W9lPAQnQ
`;
}


module.exports = generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection;
