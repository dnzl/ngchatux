import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getUsername() {
    return element(by.css('app-root h1')).$('span').getText() as Promise<string>;
  }

  getInputUsername() {
    return element(by.css('.input-name'));
  }

  getSubmitNameButton() {
    return element(by.css('.btn-submit'));
  }

  getChangeNameButton() {
    return element(by.cssContainingText('button', 'Change name'));
  }

  getInputMessage() {
    return element(by.css('.input-message'));
  }

  getMessageFeed() {
    return element(by.css('.feed-thread'));
  }

  getSendButton() {
    return element(by.cssContainingText('button', 'Send'));
  }

}
