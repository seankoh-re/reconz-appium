const { config } = require('./wdio.conf');

config.capabilities = [
  {
    platformName: 'Android',
    'appium:automationName': 'UIAutomator2',
    'appium:app': './app/app-dev-debug.apk',
  },
];

exports.config = config;
