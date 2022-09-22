const {config} = require("./all.conf");
require("path");
const firefoxConfig = {
    ...config,
    services: [['selenium-standalone', {firefox: 'latest'}]],
    capabilities: [{
        maxInstances: 1,
        browserName: "firefox"
    }],
    path: "/wd/hub",
};

exports.config = firefoxConfig;