import { ClubManPage } from './app.po';

describe('club-man App', function() {
  let page: ClubManPage;

  beforeEach(() => {
    page = new ClubManPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
