import { MainlinePage } from './app.po';

describe('mainline App', () => {
  let page: MainlinePage;

  beforeEach(() => {
    page = new MainlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
