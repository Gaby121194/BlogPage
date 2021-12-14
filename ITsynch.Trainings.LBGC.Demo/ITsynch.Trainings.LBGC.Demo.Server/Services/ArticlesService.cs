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
            var articles = this.trainingsDemoContext.Articles.OrderByDescending(art => art.Date);
            return articles.AsEnumerable();
        }

        public async Task<Article> GetArticleById(long id)
        {
            var article = await trainingsDemoContext.Articles.SingleAsync(art => art.Id == id);
            return article;
        }

        public async Task<Article> CreateArticle(Article article)
        {

            var _article = this.trainingsDemoContext.Add<Article>(article);
            var result = await this.trainingsDemoContext.SaveChangesAsync();
            return article;
        }
    }
}
