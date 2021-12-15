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
            TrainingsDemoContext trainingsDemoContext)
        {
            this.trainingsDemoContext = trainingsDemoContext
                ?? throw new ArgumentNullException(nameof(trainingsDemoContext));
        }

        public async Task<IEnumerable<Article>> GetAllArticlesAsync()
        {
          
            var articles = this.trainingsDemoContext.Articles.Include(article => article.User).OrderByDescending(art => art.Date);
            return articles.AsEnumerable();
        }

        public async Task<Article> GetArticleById(long id)
        {
            var article = trainingsDemoContext.Articles.Where(article => article.Id == id).Include(article => article.User).FirstOrDefault();
            return article;
        }

        public async Task<Article> CreateArticle(Article article)
        {
            var user = trainingsDemoContext.Users.FirstOrDefault(user => user.Id == article.User.Id);
            article.User = user;
            var _article = this.trainingsDemoContext.Articles.Add(article);
            var result = await this.trainingsDemoContext.SaveChangesAsync();
            return article;
        }
    }
}
