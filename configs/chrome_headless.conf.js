const {config} = require("./all.conf");
require("path");
const chromeConfig = {
    ...config,
    services: [['selenium-standalone', {chrome: 'latest'}]],
    capabilities: [{
        maxInstances: 1,
        browserName: "chrome",
        'goog:chromeOptions': { args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']},
    }],
    path: "/wd/hub",
};

exports.config = chromeConfig;