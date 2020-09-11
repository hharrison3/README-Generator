const api = require("./api");

function generateMarkdown(data) {
  console.log(api.getUser(data.github));
  return `
# Github: ${data.github}
# Email: ${data.email}
# ![GitHub license](${api.getUser(data.github)})
# Project Title: ${data.title}
# Project Description: ${data.description}
# Required License: ${data.license}
# Command to Install Dependencies: ${data.installation}
# Command to Run Tests: ${data.test}
# What to know about using the Repo: ${data.usage}
# What to know about contributing to the Repo: ${data.contributing}
`;
}

module.exports = generateMarkdown;
