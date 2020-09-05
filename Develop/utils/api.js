const axios = require('axios');

const api = {
  getUser(username) {
    axios.get(`https://api.github.com/users/${username}`)
  .then((res) => {
    const profileimg = res.data.avatar_url;
    return profileimg
  });
  }
};
//https://api.github.com/users/hharrison3
module.exports = api;
