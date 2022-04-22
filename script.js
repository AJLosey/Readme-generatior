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
        var licenseAbbr1 = ``
        var licenseAbbr2 = ``
        var licenseColor = ``
        switch (answers.choices) {
            case "MIT":
                licenseText = "MIT license"
                licenseAbbr1 = "MIT"
                licenseAbbr2 = "MIT"
                licenseColor = "yellow"
                break;
            case "Mozilla":
                licenseText = "Mozilla license"
                licenseAbbr1 = "MPL 2.0"
                licenseAbbr2 = "MPL_2.0"
                licenseColor = "brightgreen"
                break;
            case "ISC":
                licenseText = "ISC license"
                licenseAbbr1 = "ISC"
                licenseAbbr2 = "ISC"
                licenseColor = "blue"
                break;

        }

        let file = `## Title of Project
        [![License: ${AAA}](https://img.shields.io/badge/License-${AAA}-${color}.svg)](https://opensource.org/licenses/${AAA})
        
        Description goes here
        
        ### Table of contents
        
        [Installation](#installation)
        
        [Usage](#usage)
        
        [License](#license)
        
        [Contributing](#contributing)
        
        [Tests](#tests)
        
        [Questions](#questions)
        
        ### Installation {#installation}
        
        installation text
        
        ### Usage {#usage}
        
        usage text
        
        ### License {#license}
        
        liscense text
        
        ### Contributing {#contributing}
        
        people who contributed
        
        ### Tests {#tests}
        
        tests?
        
        ### Questions? {#questions}
        
        Send questions to
        
        -email@email.com
        
        -[github-name](githublink)`


        fs.writeFile('README.md', file, err => {
            if (err) {
                console.error(err)
                return
            }
            //file written successfully
        })






    })
    .catch(error => console.log(error));