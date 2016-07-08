import { InspectionsPage } from './app.po';

describe('inspections App', function() {
  let page: InspectionsPage;

  beforeEach(() => {
    page = new InspectionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
