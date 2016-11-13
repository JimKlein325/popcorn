import { PopcornPage } from './app.po';

describe('popcorn App', function() {
  let page: PopcornPage;

  beforeEach(() => {
    page = new PopcornPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
