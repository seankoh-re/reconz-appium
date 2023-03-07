const { config } = require('./wdio.conf');

config.capabilities = [
  {
    platformName: 'Android',
    'appium:automationName': 'UIAutomator2',
    'appium:app': './app/app-dev-debug.apk',
    'appium:avdArgs': '-no-window',
    'appium:isHeadless': true,
  },
];

exports.config = config;
