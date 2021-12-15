import * as fromArticles from './articles.actions';

describe('loadArticles', () => {
  it('should return an action', () => {
    expect(fromArticles.loadArticles().type).toBe('[Articles] Load Articles');
  });
});
