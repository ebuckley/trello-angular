import { TrelloSowPage } from './app.po';

describe('trello-sow App', () => {
  let page: TrelloSowPage;

  beforeEach(() => {
    page = new TrelloSowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
