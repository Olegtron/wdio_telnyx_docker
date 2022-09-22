const {config} = require("./all.conf");
require("path");
const edgeConfig = {
    ...config,
    services: [['selenium-standalone', {MicrosoftEdge: 'latest'}]],
    capabilities: [{
        maxInstances: 1,
        browserName: "MicrosoftEdge",
        'ms:edgeOptions': { args: ['--headless']},
    }],
    path: "/wd/hub",
};

exports.config = edgeConfig;