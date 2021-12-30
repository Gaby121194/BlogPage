using AutoMapper;   
using ITsynch.Trainings.LBGC.Demo.Controllers;
using ITsynch.Trainings.LBGC.Demo.DataTransfer;
using ITsynch.Trainings.LBGC.Demo.Models;
using ITsynch.Trainings.LBGC.Demo.Persistence;
using ITsynch.Trainings.LBGC.Demo.Services;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Moq;
using System.Threading.Tasks;
using Xunit;

namespace ArticlesTestProjec
{
    public class ArticleUnitTest
    {
        
        [Fact]
        public async Task ArticleControler_WhenPassAnArticleId_ShouldReturnArticleDataAsync()
        {
            //Arrange
            var article = new Article();
            article.Id = 2;
            article.Title = "un nuevo article";
            article.Content = "content";
            article.Delete = false;

            var articleMapperDto = new ArticleDto();
            articleMapperDto.Id = article.Id;
            articleMapperDto.Title = article.Title;
            articleMapperDto.Content = article.Content;
            articleMapperDto.Delete = article.Delete;

            var articleDTO = new ArticleDto();
            articleDTO.Id = 2;
            articleDTO.Title = "un nuevo article";
            articleDTO.Content = "content";
            articleDTO.Delete = false;


            var contextOptions = new DbContextOptionsBuilder<TrainingsDemoContext>()
                                .UseSqlServer("Server = localhost, 11433; Database = ITsynchTrainingsDemo; User Id = sa; Password = ITsDemos2021;")
                                .Options;
            var demoContext = new Mock<TrainingsDemoContext>(contextOptions);
            var mapperMock = new Mock<IMapper>();
            mapperMock.Setup(m => m.Map<ArticleDto>(article)).Returns(articleMapperDto);
            var articleServiceMock = new Mock<ArticlesService>(demoContext.Object, mapperMock.Object);
            articleServiceMock.Setup(m => m.GetArticleById(2)).ReturnsAsync(article);
            var articleController = new ArticlesController(articleServiceMock.Object, mapperMock.Object);

            //Act
            var newArticle= await articleController.GetArticle(2);



            //Fact
            var newArticleSerializable = JsonConvert.SerializeObject(newArticle);
            var articleDTOSerializable = JsonConvert.SerializeObject(articleDTO);
            Assert.Equal(newArticleSerializable, articleDTOSerializable);
        }


        [Fact]
        public async Task ArticleControler_WhenPassAnArticleIdToDeleteIt_ShouldReturnArticleDataOfTheDeletedArticle()
        {
            //Arrange
            var article = new Article();
            article.Id = 2;
            article.Title = "un nuevo article";
            article.Content = "content";
            article.Delete = true;

            var articleMapperDto = new ArticleDto();
            articleMapperDto.Id = article.Id;
            articleMapperDto.Title = article.Title;
            articleMapperDto.Content = article.Content;
            articleMapperDto.Delete = article.Delete;

            var articleDTO = new ArticleDto();
            articleDTO.Id = 2;
            articleDTO.Title = "un nuevo article";
            articleDTO.Content = "content";
            articleDTO.Delete = true;


            var contextOptions = new DbContextOptionsBuilder<TrainingsDemoContext>()
                                .UseSqlServer("Server = localhost, 11433; Database = ITsynchTrainingsDemo; User Id = sa; Password = ITsDemos2021;")
                                .Options;
            var demoContext = new Mock<TrainingsDemoContext>(contextOptions);
            var mapperMock = new Mock<IMapper>();
            mapperMock.Setup(m => m.Map<ArticleDto>(article)).Returns(articleMapperDto);
            var articleServiceMock = new Mock<ArticlesService>(demoContext.Object, mapperMock.Object);
            articleServiceMock.Setup(m => m.DeleteArticle(2)).ReturnsAsync(article);
            var articleController = new ArticlesController(articleServiceMock.Object, mapperMock.Object);

            //Act
            var newDeletedArticle = await articleController.DeleteArticle(2);

            //Fact
            var newDeletedArticleSerializable = JsonConvert.SerializeObject(newDeletedArticle);
            var articleDTOSerializable = JsonConvert.SerializeObject(articleDTO);
            Assert.Equal(newDeletedArticleSerializable, articleDTOSerializable);
        }

    }
}
