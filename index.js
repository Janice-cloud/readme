const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


inquirer
    .prompt( [
        {
            message: "Enter your Github username",
            name: "username"
        },
        {
            message: "What is the Project Title?",
            name: "title",
            type: "input",
        },
        {
            message: "What is the Description?",
            name: "description",
            type: "input",
        },
        {
            message: "What is the Installation?",
            name: "installation",
            type: "input",
        },
        {
            message: "Usage?",
            name: "usage",
            type: "input",
        },
        {
            message: "License?",
            name: "license",
            type: "list",
            choices: ['MPL 2.0', 'MIT', 'ISC']
        },
        {
            message: "Contributors",
            name: "contributors",
            type: "input",
        },
        {
            message: "Test",
            name: "test",
            type: "input",
        },
    ])
   
    .then((ans) => {
        let data = `
        
        # ${ans.title}
        \r\n

        ## Description
        \r\n${ans.description}

        ## Installation
        \r\n${ans.installation}

        ## Usage
        \r\n${ans.usage}

        ## License
        \r\n[![License:${ans.license}](https://img.shields.io/badge/<License>-<${ans.license}>-<red>)]

        ## Contributing
        \r\n${ans.contributors}

        ## Test
        \r\n${ans.test}

        ## Questions

        `;
        fs.writeFileSync("./readMe.md", data);
    }); 

    /*.then(function({ username }) {
        const queryURL = `https://api.github.com/users/${username}/repos?per_page=100`;
        axios.get(queryURL).then(function(response){
            console.log(response);
            })*/