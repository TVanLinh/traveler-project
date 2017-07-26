import { TravelerProjectPage } from './app.po';

describe('traveler-project App', () => {
  let page: TravelerProjectPage;

  beforeEach(() => {
    page = new TravelerProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
