const fs = require('fs')

var inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: `What is your description? Think about the "what", "why", and "how." `,
            name: "descript"
        },
        {
            type: "input",
            message: "How do you install your project?",
            name: "install"
        },
        {
            type: "input",
            message: "How do you use your project?",
            name: "usage"
        },
        {
            type: "input",
            message: "Who all contributed?",
            name: "contributing"
        },
        {
            type: "input",
            message: "How do you uses any tests that might be provided?",
            name: "tests"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your github profile address?",
            name: "githublink"
        },
        {
            type: "list",
            message: "what license is this under?",
            name: "license",
            choices: ["MIT", "Mozilla", "ISC"]
        },

    ])
    .then((answers) => {

        let title = answers.title;
        let descript = answers.descript;
        let install = answers.install;
        let usage = answers.usage;
        let contributing = answers.contributing;
        let tests = answers.tests;
        let email = answers.email;
        let github = answers.githublink;
        var licenseText = ``
        var licenseBadge = ``
        switch (answers.license) {
            case "MIT":
                licenseText = "MIT license"
                licenseBadge1 = "License: MIT"
                licenseBadge2 = "https://img.shields.io/badge/License-MIT-yellow.svg"
                licenseBadge3 = "https://opensource.org/licenses/MIT"
                break;
            case "Mozilla":
                licenseText = "Mozilla license"
                licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
                break;
            case "ISC":
                licenseText = "ISC license"
                licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
                break;
            default:
                break;
        }

        let file = `
# ${title}

[![${licenseBadge1}][license-image]][license-url]
        
${descript}
        
### Table of contents
        
[Installation](#installation)
        
[Usage](#usage)
        
[License](#license)
        
[Contributing](#contributing)
        
[Tests](#tests)
        
[Questions](#questions)
        
### Installation {#installation}
        
${install}
        
### Usage {#usage}
        
${usage}
        
### License {#license}
        
${licenseText}
        
### Contributing {#contributing}
        
${contributing}
        
### Tests {#tests}
        
${tests}
        
### Questions? {#questions}
        
Send questions to
        
-${email}
        
-[link to my github](${github})

[license-image]: ${licenseBadge2}

[license-url]: ${licenseBadge3}`


        fs.writeFile('README.md', file, err => {
            if (err) {
                console.error(err)
                return
            }
            //file written successfully
        })






    })
    .catch(error => console.log(error));