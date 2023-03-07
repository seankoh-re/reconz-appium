const {
  Given,
  When,
  Then,
  BeforeAll,
} = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const pages = {
  login: LoginPage,
};

BeforeAll(async () => {
  await driver.pause(10000);
});

Given('I click {string} on the navigation tab', async (screen) => {
  await LoginPage.navigateTo(screen);
});

When('I click on {string} button', async (button) => {
  await LoginPage.clickOnButton(button);
});

When(
  'login with {string} and {string}',
  async (username, password) => {
    await LoginPage.login(username, password);
  }
);

Then(
  "I should see the user's name - {string} on the screen and the {string} button",
  async (name, text) => {
    await LoginPage.verifyUserName(name);
    await LoginPage.verifyButton(text);
  }
);

Then('I click on Log out', async () => {
  await LoginPage.logout();
});
