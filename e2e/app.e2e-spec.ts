import { AngularMaterialTypeaheadPage } from './app.po';

describe('angular-material-typeahead App', function() {
  let page: AngularMaterialTypeaheadPage;

  beforeEach(() => {
    page = new AngularMaterialTypeaheadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
