const {config} = require("./all.conf");
require("path");
const chromeConfig = {
    ...config,
    services: [['selenium-standalone', {chrome: 'latest'}]],
    capabilities: [{
        maxInstances: 1,
        browserName: "chrome"
    }],
    path: "/wd/hub",
};

exports.config = chromeConfig;