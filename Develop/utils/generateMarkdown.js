const api = require("./api");

function generateMarkdown(data) {
  // console.log(api.getUser(data.github));
  return `
# Project Title: 
${data.title}
# Project Description: 
${data.description}
# Table of Contents
* License
* Installation
* Tests
* Usage
* Contributing
* Questions
# License: 
This project is licensed under the ${data.license} license.
# Installation: 
To install necessary dependencies, run the following command:
${data.installation}
# Tests: 
To run tests, run the following command: 
${data.test}
# Usage: 
What to know about using the repo: 
${data.usage}
# Contributing: 
${data.contributing}
# Questions:
If you have any questions about the repo, open an issue or contact
me directly at ${data.email}. You can find more of my work at my GitHub: ${data.github}.
# ![GitHub logo](${api.getUser(data.github)})
`;
}

module.exports = generateMarkdown;
