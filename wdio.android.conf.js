const { config } = require('./wdio.conf');

config.capabilities = [
  {
    platformName: 'Android',
    'appium:deviceName': 'Pixel XL',
    'appium:platformVersion': '13.0',
    'appium:automationName': 'UIAutomator2',
    'appium:app': './apk/app-dev-debug.apk',
    //  '/Users/seankoh/RE/reconz-app/android/app/build/outputs/apk/dev/debug/app-dev-debug.apk',
  },
];

exports.config = config;
