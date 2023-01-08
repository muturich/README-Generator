const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = ({ title, description, installation, usage, contributions, tests, license, github, email, badge }) =>
    `# ${title}  
${badge}  
    
## Description  
${description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)
    
## Installation
    
For this application to function, you must install the following: 
${installation}
    
## Usage
    
${usage}
## Contributing
${contributions}
## Tests
${tests}

## Video Guide

To Use this application, please follow the guide as described in the video link below:
https://ik.imagekit.io/tsoc7yrwg/Untitled__Dec_15__2022_1_40_AM.webm?ik-sdk-version=javascript-1.4.3&updatedAt=1671090213705

## License
${license} License
## Questions
        
If you have any questions, feel free to contact me at
Github: https://github.com/${github} or Email: ${email}
`

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project title?",
            validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter a project title!");
                return false;
            }
            },
        },
        {
            type: "input",
            name: "description",
            message: `Let's add a description for your project!`,
            validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a project description!");
                return false;
            }
            },
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions?",
            validate: (installationInput) => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please explain the installation process!");
                return false;
            }
            },
        },
        {
            type: "input",
            name: "usage",
            message: "Enter your usage information!",
            validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please explain project usage!");
                return false;
            }
            },
        },
        {
            type: "input",
            name: "contributions",
            message: "How can others contribute?",
            validate: (contributionsInput) => {
            if (contributionsInput) {
                return true;
            } else {
                console.log(
                "Please explain how others can contribute to this project!"
                );
                return false;
            }
            },
        },
        {
            type: "input",
            name: "tests",
            message: "How do you test this project?",
            validate: (testsInput) => {
            if (testsInput) {
                return true;
            } else {
                console.log("Please explain how to test this project!");
                return false;
            }
            },
        },
        {
            type: "list",
            name: "license",
            message: "What license is your project?",
            choices: [
            "Apache 2.0",
            "Boost",
            "GNU AGPL v3",
            "MIT",
            "Perl",
            "other",
            ],
            validate: (licenseInput) => {
            if (licenseInput) {
                return true;
            } else {
                console.log(`Please enter your project's license!`);
                return false;
            }
            },
        },
        {
            type: "input",
            name: "github",
            message: "What is your github username?",
            validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your Github username!");
                return false;
            }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
            validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please input your email!");
                return false;
            }
            },
        },
    ])
    .then((answers) => {
        const badge = renderBadge(answers.license)
        const readmePageContent = generateREADME({...answers, badge});

        fs.writeFile('README.md', readmePageContent, (err) => {
            err ? console.log(err) : console.log('Successfully generated README!')
        })
    })

    function renderBadge(license) {
        let badge = ''
        if (license === 'Apache 2.0') {
            badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        } else if (license === 'Boost') {
            badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
        } else if (license === 'GNU AGPL v3') {
            badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
        } else if (license === 'MIT') {
            badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        } else if (license === 'Perl') {
            badge = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
        } else {
            badge = ''
        }
        return badge;
    }