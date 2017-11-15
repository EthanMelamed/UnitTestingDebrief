import { UnitTestingDebriefPage } from './app.po';

describe('unit-testing-debrief App', () => {
  let page: UnitTestingDebriefPage;

  beforeEach(() => {
    page = new UnitTestingDebriefPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
