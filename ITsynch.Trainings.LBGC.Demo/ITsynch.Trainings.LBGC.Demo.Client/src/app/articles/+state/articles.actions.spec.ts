import * as fromArticles from './articles.actions';

describe('loadArticless', () => {
  it('should return an action', () => {
    expect(fromArticles.loadArticless().type).toBe('[Articles] Load Articless');
  });
});
