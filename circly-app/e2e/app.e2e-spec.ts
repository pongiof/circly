import { CirclyAppPage } from './app.po';

describe('circly-app App', () => {
  let page: CirclyAppPage;

  beforeEach(() => {
    page = new CirclyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
