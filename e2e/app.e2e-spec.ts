import { AdminWorkspacePage } from './app.po';

describe('admin-workspace App', () => {
  let page: AdminWorkspacePage;

  beforeEach(() => {
    page = new AdminWorkspacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
