import { FirstappAngular2Page } from './app.po';

describe('firstapp-angular2 App', () => {
  let page: FirstappAngular2Page;

  beforeEach(() => {
    page = new FirstappAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
