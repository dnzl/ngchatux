import { AppPage } from './app.po';
import { browser, logging, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should display insert name input, and send welcome message after changing name', () => {
    const username = 'Usagi Tsukino';
    page.navigateTo();
    expect(page.getInputUsername()).toBeTruthy();

    page.getInputUsername().sendKeys(username);
    page.getSubmitNameButton().click();
    expect(page.getUsername()).toEqual(username);

    const messagesList = page.getMessageFeed().all(by.className('message'));
    expect(messagesList.count()).toBeGreaterThan(0);

    const lastMessage = messagesList.last();
    expect(lastMessage.$('.body').getText()).toContain(`Welcome ${username}!`);
    expect(lastMessage.$('.sender').getText()).toContain('Bot');

  });

  it(`should change name and send message, then display message with new name in the feed`, () => {
    const username = 'Usagi Tsukino';
    const message = 'Moon Prism Power, Make Up!';
    page.navigateTo();

    // change name
    page.getInputUsername().sendKeys(username);
    page.getSubmitNameButton().click();
    expect(page.getUsername()).toEqual(username);
    expect(page.getTitleText()).toEqual(`Welcome ${username}!`);

    // send msg
    page.getInputMessage().sendKeys(message);
    page.getSendButton().click();

    const messagesList = page.getMessageFeed().all(by.className('message'));
    expect(messagesList.count()).toBeGreaterThan(0);

    const lastMessage = messagesList.last();
    expect(lastMessage.$('.body').getText()).toContain(message);
    expect(lastMessage.$('.sender').getText()).toContain(username);
  });

});
