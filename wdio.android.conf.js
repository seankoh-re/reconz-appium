const { config } = require('./wdio.conf');

config.capabilities = [
  {
    platformName: 'Android',
    'appium:automationName': 'UIAutomator2',
    'appium:app': './app/app-dev-debug.apk',
    'appium:adbExecTimeout': 60000,
    // '/Users/seankoh/RE/reconz-app/android/app/build/outputs/apk/dev/debug/app-dev-debug.apk',
  },
];

exports.config = config;
