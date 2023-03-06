const { Given } = require('@wdio/cucumber-framework');

Given('I click {string} on the navigation tab', async (screen) => {
  await $('~More button').click();
});
