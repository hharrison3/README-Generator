// require dependencies
const axios = require('axios');
// function to make API request to Github and grab picture from users github
const api = async function(username)  {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    const data = await response.data.avatar_url;
    // console.log(data);
    return data
  };
module.exports = api;
