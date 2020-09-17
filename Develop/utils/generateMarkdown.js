// require dependencies
const api = require("./api");
// create readme based on users response to questions
function generateMarkdown(data) {
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
\`\`\`
${data.installation}
\`\`\`
# Tests: 
To run tests, run the following command: 
\`\`\`
${data.test}
\`\`\`
# Usage: 
What to know about using the repo: 
${data.usage}
# Contributing: 
${data.contributing}
# Questions:
If you have any questions about the repo, open an issue or contact
me directly at ${data.email}. You can find more of my work at my GitHub: ${data.github}.

# [![${data.github}](https://github.com/${data.github}.png?size=200)](https://github.com/${data.github})
`;
}
module.exports = generateMarkdown;
