const {config} = require("./all.conf");
require("path");
const firefoxConfig = {
    ...config,
    services: [['selenium-standalone', {firefox: 'latest'}]],
    capabilities: [{
        maxInstances: 1,
        browserName: "firefox",
        'moz:firefoxOptions': { args: ['--headless']},
    }],
    path: "/wd/hub",
};

exports.config = firefoxConfig;