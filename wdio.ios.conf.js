const { config } = require('./wdio.conf');

config.capabilities = [
  {
    platformName: 'IOS',
    'appium:deviceName': 'iPhone 14',
    'appium:platformVersion': '16.2',
    'appium:automationName': 'XCUItest',
    'appium:app': './app/reconz-app.app',
  },
  // '/Users/seankoh/Library/Developer/Xcode/DerivedData/reconz-app-hhokjcpncjhdiifhmwtglwmtlhkr/Build/Products/DebugDev-iphonesimulator/reconz-app.app',
];

exports.config = config;
