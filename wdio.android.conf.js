const { config } = require('./wdio.conf');

config.capabilities = [
  {
    platformName: 'Android',
    'appium:automationName': 'UIAutomator2',
    'appium:app': './app/app-dev-debug.apk',
    'appium:uiautomator2ServerLaunchTimeout': 120000,
    'appium:isHeadless': true,
  },
];

exports.config = config;
