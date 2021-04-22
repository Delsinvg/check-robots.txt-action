const core = require("@actions/core");
const github = require("@actions/github");
const axios = require("axios").default;

try {
    const siteUrl = core.getInput("site");

    axios
    .get(siteUrl + '/robots.txt')
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });

  } catch (error) {
    core.setFailed(error.message);
  }