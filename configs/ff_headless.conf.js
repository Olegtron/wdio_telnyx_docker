const {config} = require("./all.conf");
require("path");
const firefoxConfig = {
    ...config,
    services: [['selenium-standalone', {firefox: 'latest'}]],
    capabilities: [{
        maxInstances: 1,
        browserName: "firefox",
        'moz:firefoxOptions': { args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']},
    }],
    path: "/wd/hub",
};

exports.config = firefoxConfig;