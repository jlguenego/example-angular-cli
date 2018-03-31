import { AppPage } from './app.po';

describe('example-angular-cli App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display 2018', () => {
    page.navigateTo();
    expect(page.getYear()).toEqual('2018');
  });
});
