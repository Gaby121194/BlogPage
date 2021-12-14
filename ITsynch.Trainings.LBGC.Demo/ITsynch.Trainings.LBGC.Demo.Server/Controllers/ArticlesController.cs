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
        public async Task<Article> GetArticle(long id)
        {
            var article = await this.articlesService.GetArticleById(id);
            return article;
        }

        // POST api/<ArticleController>
        [HttpPost]
        public async Task<ArticleDto> PostArticle(Article article)
        {
            var _article = await this.articlesService.CreateArticle(article);
            return mapper.Map<ArticleDto>(_article); ;
        }

        // PUT api/<ArticleController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ArticleController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
