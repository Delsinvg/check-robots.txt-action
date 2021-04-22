const core = require("@actions/core");
const github = require("@actions/github");
const axios = require("axios").default;

try {
    const siteUrl = core.getInput("site") + '/robots.txt';

    axios
    .get(siteUrl)
    .then(function (response) {
        core.setOutput("robots", siteUrl);
    })
    .catch(function (error) {
        core.setFailed("The website does not have a robots.txt");
    });

  } catch (error) {
    core.setFailed(error.message);
  }