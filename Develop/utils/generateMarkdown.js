const api = require("./api");

function generateMarkdown(data) {
  console.log(api.getUser(data.github));
  return `
# ${data.title}
# ![GitHub license](${api.getUser(data.github)})
`;
}

module.exports = generateMarkdown;
