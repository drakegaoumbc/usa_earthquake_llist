import { USAEeatHQuackListPage } from './app.po';

describe('usaeeat-hquack-list App', () => {
  let page: USAEeatHQuackListPage;

  beforeEach(() => {
    page = new USAEeatHQuackListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
