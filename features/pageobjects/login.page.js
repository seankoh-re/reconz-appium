const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  get btnEditProfile() {
    return $('~Edit Profile');
  }

  get btnSignIn() {
    return $('~Sign in');
  }

  get btnLoginSignUp() {
    return $('~Login / Sign up');
  }

  get txtInputEmailAddress() {
    return $('~E-mail address');
  }

  get txtInputPassword() {
    return $('~Enter password');
  }

  get btnContinue() {
    return $('~Continue');
  }

  userName() {
    return $('~Username');
  }

  get txtLogout() {
    const iosSelector = '~Log out';
    const androidSelector = `android=new UiScrollable(new UiSelector()).scrollIntoView(textContains("Log out"))`;
    return $(driver.isIOS ? iosSelector : androidSelector);
  }

  get btnMore() {
    //const iosSelector =
    //  '-ios class chain:**/XCUIElementTypeButton[`label == "More button"`]';
    //const androidSelector = '~More button';
    //return $(driver.isIOS ? iosSelector : androidSelector);
    return $('~More button');
  }

  async navigateTo(screen) {
    //await driver.pause(10000000);
    switch (screen) {
      case 'More':
        await this.btnMore.click();
        break;
    }
  }

  async clickOnButton(button) {
    switch (button) {
      case 'Edit Profile':
        await this.btnEditProfile.click();
        break;
      case 'Login / Sign up':
        await this.btnLoginSignUp.click();
        break;
    }
  }

  async login(username, password) {
    await this.txtInputEmailAddress.clearValue();
    await this.txtInputEmailAddress.setValue(username);
    await this.btnContinue.click();
    await this.txtInputPassword.setValue(password);
    await driver.hideKeyboard();
    await this.btnSignIn.click();
  }

  async logout() {
    await this.txtLogout.click();
  }

  async verifyEditProfileButton(text) {
    await expect(await this.btnEditProfile.getText()).toMatch(text);
  }

  async verifyButton(text) {
    let btn = null;
    switch (text) {
      case 'Edit Profile':
        btn = this.btnEditProfile;
        break;
      case 'Login / Sign up':
        btn = this.btnLoginSignUp;
        break;
    }
    await expect(await btn.getText()).toMatch(text);
  }

  async verifyUserName(name) {
    await expect(await this.userName().getText()).toMatch(name);
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open('login');
  }
}

module.exports = new LoginPage();
