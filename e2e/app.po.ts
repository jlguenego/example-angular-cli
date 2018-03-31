import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getYear() {
    return element(by.css('app-footer span')).getText();
  }
}
