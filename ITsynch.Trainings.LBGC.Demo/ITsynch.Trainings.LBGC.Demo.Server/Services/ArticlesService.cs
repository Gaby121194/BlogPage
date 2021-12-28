using ITsynch.Trainings.LBGC.Demo.Models;
using ITsynch.Trainings.LBGC.Demo.Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITsynch.Trainings.LBGC.Demo.Services
{
    public class ArticlesService
    {
        private readonly TrainingsDemoContext trainingsDemoContext;


        public ArticlesService(
            TrainingsDemoContext trainingsDemoContext, UsersService usersService)
        {
            this.trainingsDemoContext = trainingsDemoContext
                ?? throw new ArgumentNullException(nameof(trainingsDemoContext));

        }

        public async Task<IEnumerable<Article>> GetAllArticlesAsync()
        {
          
            var articles = this.trainingsDemoContext.Articles.Include(article => article.User)
                                                              .Include(article => article.FavoritesUsers)
                                                              .Where(article => article.Delete == false)
                                                              .OrderByDescending(art => art.Date);
            return articles.AsEnumerable();
        }

        public virtual async Task<Article> GetArticleById(long id)
        {
            var article = trainingsDemoContext.Articles.Where(article => article.Id == id && article.Delete == false)
                                                       .Include(article => article.User)
                                                       .FirstOrDefault();
            return article;
        }

        public async Task<IEnumerable<Article>> GetFavoritesArticles(long id)
        {
            var user = trainingsDemoContext.Users.Include(user => user.FavoritesArticles).FirstOrDefault(user => user.Id == id);
            return user.FavoritesArticles.Where(art => art.Delete == false).AsEnumerable();
        }

        public async Task<Article> MarkAsFavorite(long userId, long articleId)
        {
            var user = trainingsDemoContext.Users.FirstOrDefault(user => user.Id == userId);
            var _article = trainingsDemoContext.Articles.Include(art => art.FavoritesUsers).FirstOrDefault(art => art.Id == articleId && art.Delete ==false);
            _article.FavoritesUsers.Add(user);
            var result = await trainingsDemoContext.SaveChangesAsync();
            return _article;
        }

        public async Task<Article> UnmarkAsFavorite(long userId, long articleId)
        {
            var user = trainingsDemoContext.Users.FirstOrDefault(user => user.Id == userId);
            var _article = trainingsDemoContext.Articles.Include(art => art.FavoritesUsers).FirstOrDefault(art => art.Id == articleId && art.Delete == false);
            _article.FavoritesUsers.Remove(user);
            var result = await trainingsDemoContext.SaveChangesAsync();
            return _article;
        }

        public async Task<IEnumerable<Article>> SearchArticles(ArticleFilter filter)
        {

            var query = this.trainingsDemoContext.Articles.Include(article => article.User)
                                                              .Where(article => article.Delete == false);
            if (!String.IsNullOrEmpty(filter.SearchTitle))
            {
                query = query.Where(article => article.Title.Contains(filter.SearchTitle));
            }
            if (filter.SearchAuthors != null)
            {
                query = query.Where(article => filter.SearchAuthors.Contains(article.User.Id));

            }
            if(filter.MaxDate != null)
            {
                query = query.Where(article => article.Date <= filter.MaxDate);
            }
            if (filter.MinDate != null)
            {
                query = query.Where(article => article.Date >= filter.MinDate);
            }
            if (!String.IsNullOrEmpty(filter.Category))
            {
                query = query.Where(article => article.Category == filter.Category);
            }
            return query.OrderByDescending(art => art.Date).AsEnumerable();
        }

        public async Task<Article> CreateArticle(Article article)
        {
            var user = trainingsDemoContext.Users.FirstOrDefault(user => user.Id == article.User.Id);
            article.User = user;
            article.Delete = false;
            var _article = this.trainingsDemoContext.Articles.Add(article);
            var result = await this.trainingsDemoContext.SaveChangesAsync();
            return article;
        }

        public async Task<Article> EditArticle(long id, Article article)
        {
            var _article = trainingsDemoContext.Articles.Where(art => art.Id == id).Include(article=> article.User).FirstOrDefault();
            _article.Title = article.Title;
            _article.Content = article.Content;
            _article.Category = article.Category;
            _article.Date = article.Date;
            var result = await this.trainingsDemoContext.SaveChangesAsync();
            return _article;
        }


        public async Task<Article> RestoreDeletedArticle(long id)
        {
            var _article = this.trainingsDemoContext.Articles.FirstOrDefault(art => art.Id == id && art.Delete== true);
            _article.Delete = false;
            await this.trainingsDemoContext.SaveChangesAsync();
            return _article;
        }

        public virtual async Task<Article> DeleteArticle(long id)
        {
            var _article = this.trainingsDemoContext.Articles.FirstOrDefault(art => art.Id == id);
            _article.Delete = true;
            await this.trainingsDemoContext.SaveChangesAsync();
            return _article;
        }

        public async Task<IEnumerable<Article>> GetDeletedArticles(long userId)
        {

            var articles = this.trainingsDemoContext.Articles.Include(article => article.User)
                                                              .Where(article => article.Delete == true && article.User.Id == userId)
                                                              .OrderByDescending(art => art.Date);
            return articles.AsEnumerable();
        }
    }
}
