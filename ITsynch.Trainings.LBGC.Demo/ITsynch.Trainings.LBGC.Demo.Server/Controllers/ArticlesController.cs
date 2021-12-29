using AutoMapper;
using ITsynch.Trainings.LBGC.Demo.DataTransfer;
using ITsynch.Trainings.LBGC.Demo.Models;
using ITsynch.Trainings.LBGC.Demo.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ITsynch.Trainings.LBGC.Demo.Controllers
{
    [Route("articles")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly ArticlesService articlesService;
        public ArticlesController(
            ArticlesService articlesService,
            IMapper mapper)
        {
            this.articlesService = articlesService
                ?? throw new ArgumentNullException(nameof(articlesService));

            this.mapper = mapper
                ?? throw new ArgumentNullException(nameof(mapper));
        }
        // GET: api/<ArticleController>
        [HttpGet]
        public async Task<IEnumerable<ArticleDto>> GetAllArticles()
        {
            var articles = await this.articlesService.GetAllArticlesAsync();
            return mapper.Map<IEnumerable<ArticleDto>>(articles);
        }

        // GET api/<ArticleController>/5
        [HttpGet("{id}")]
        public async Task<ArticleDto> GetArticle(long id)
        {
            var article = await this.articlesService.GetArticleById(id);
            return mapper.Map<ArticleDto>(article);
        }

        // GET api/<ArticleController>/5
        [HttpGet("[action]/{id}")]
        public async Task<IEnumerable<ArticleDto>> GetFavoritesArticles(long id)
        {
            var articles = await this.articlesService.GetFavoritesArticles(id);
            return mapper.Map<IEnumerable<ArticleDto>>(articles);
        }

        // DELETE api/<ArticleController>/5
        [HttpGet("[action]/{id}")]
        public async Task<IEnumerable<ArticleDto>> GetDeletedArticles(long id)
        {
            var articles = await this.articlesService.GetDeletedArticles(id);
            return mapper.Map<IEnumerable<ArticleDto>>(articles);
        }

        // Get api/<ArticleController>
        [HttpPost("[action]")]

        public async Task<IEnumerable<ArticleDto>> SearchArticles(ArticleFilter filter)
        {
            var articles = await articlesService.SearchArticles(filter);
            return mapper.Map<IEnumerable<ArticleDto>>(articles);
        }

        // Get api/<ArticleController>
        [HttpGet("[action]/{id}")]

        public async Task<IEnumerable<ArticleDto>> GetDraftArticles(long id)
        {
            var articles = await this.articlesService.GetDraftArticles(id);
            return mapper.Map<IEnumerable<ArticleDto>>(articles);
        }

        // POST api/<ArticleController>
        [HttpPost]
        public async Task<ArticleDto> PostArticle(Article article)
        {
            var _article = await this.articlesService.CreateArticle(article);
            return mapper.Map<ArticleDto>(_article);
        }

        // PUT api/<ArticleController>
        [HttpPut("[action]/{id}")]
        public async Task<ArticleDto> PostDraftArticle(long id)
        {
            var _article = await this.articlesService.PostDraftArticle(id);
            return mapper.Map<ArticleDto>(_article);
        }

        // POST api/<ArticleController>
        [HttpPost("[action]")]
        public async Task<ArticleDto> CreateDraftArticle(Article article)
        {
            var _article = await this.articlesService.CreateDraftArticle(article);
            return mapper.Map<ArticleDto>(_article);
        }

        // PUT api/<ArticleController>/5
        [HttpPut("{id}")]
        public async Task<ArticleDto> PutArticle(long id, [FromBody] Article article)
        {
            var _article = await this.articlesService.EditArticle(id, article);
            return mapper.Map<ArticleDto>(_article); ;
        }

        // PUT api/<ArticleController>/5
        [HttpPut("[action]/{id}")]
        public async Task<ArticleDto> MarkAsFavorite([FromBody] long userId, long id)
        {
            var _article = await this.articlesService.MarkAsFavorite(userId, id);
            return mapper.Map<ArticleDto>(_article); ;
        }

        // PUT api/<ArticleController>/5
        [HttpPut("[action]/{id}")]
        public async Task<ArticleDto> UnmarkAsFavorite([FromBody] long userId, long id)
        {
            var _article = await this.articlesService.UnmarkAsFavorite(userId, id);
            return mapper.Map<ArticleDto>(_article); ;
        }

        // PUT api/<ArticleController>/5
        [HttpPut("[action]/{id}")]
        public async Task<ArticleDto> RestoreDeletedArticle(long id)
        {
            var _article = await this.articlesService.RestoreDeletedArticle(id);
            return mapper.Map<ArticleDto>(_article); ;
        }


        // DELETE api/<ArticleController>/5
        [HttpDelete("{id}")]
        public async Task<ArticleDto> DeleteArticle(long id)
        {
            var article = await this.articlesService.DeleteArticle(id);
            return mapper.Map<ArticleDto>(article);
        }
    }
}
