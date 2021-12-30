using AutoMapper;
using ITsynch.Trainings.LBGC.Demo.Controllers;
using ITsynch.Trainings.LBGC.Demo.DataTransfer;
using ITsynch.Trainings.LBGC.Demo.Models;
using ITsynch.Trainings.LBGC.Demo.Persistence;
using ITsynch.Trainings.LBGC.Demo.Services;
using Microsoft.EntityFrameworkCore;
using Moq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace CommentControllerTests
{
    public class UnitTest1
    {
        [Fact]
        public async Task CreateComment()
        {
            //Arrange
            var options = new DbContextOptionsBuilder<TrainingsDemoContext>()
                .UseSqlServer("Server=localhost,11433;Database=ITsynchTrainingsDemo;User Id=sa;Password=ITsDemos2021;")
                .Options;

            var comment = new Comment();
            var commentDto = new CommentDto();

            comment.Content = "Comentario de prueba";
            comment.Date = DateTime.Now;
            comment.Id = 1;
            comment.IdArticle = 10;

            commentDto.Content = comment.Content;
            commentDto.Date = comment.Date;
            commentDto.Id = comment.Id;
            commentDto.IdArticle = comment.IdArticle;

            var dbContext = new Mock<TrainingsDemoContext>(options);
            var mockMapper = new Mock<IMapper>();
            mockMapper.Setup(sp => sp.Map<CommentDto>(comment)).Returns(commentDto);
            var mockCommentsService = new Mock<CommentsService>(dbContext.Object);
            mockCommentsService.Setup(sp => sp.CreateComment(comment)).ReturnsAsync(comment);

            var controller = new CommentController(mockCommentsService.Object, mockMapper.Object);

            //Act
            var result = await controller.PostComment(comment);

            //Assert
            Assert.Equal(comment.Id, result.Id);
            Assert.Equal(comment.Content, result.Content);
        }

        [Fact]
        public async Task GetAllCommentsByArticleId()
        {
            //Arrange
            var options = new DbContextOptionsBuilder<TrainingsDemoContext>()
                .UseSqlServer("Server=localhost,11433;Database=ITsynchTrainingsDemo;User Id=sa;Password=ITsDemos2021;")
                .Options;

            var comment = new Comment();
            var comment2 = new Comment();
            var comment3 = new Comment();

            var commentDto = new CommentDto();
            var commentDto2 = new CommentDto();
            var commentDto3 = new CommentDto();

            comment.Content = "Comentario de prueba";
            comment.Date = DateTime.Now;
            comment.Id = 1;
            comment.IdArticle = 10;

            comment2.Content = "Otro comentario de prueba";
            comment2.Date = DateTime.Now;
            comment2.Id = 2;
            comment2.IdArticle = 10;

            comment3.Content = "Este es otro comentario de prueba";
            comment3.Date = DateTime.Now;
            comment3.Id = 3;
            comment3.IdArticle = 10;

            commentDto.Content = comment.Content;
            commentDto.Date = comment.Date;
            commentDto.Id = comment.Id;
            commentDto.IdArticle = comment.IdArticle;

            commentDto2.Content = comment2.Content;
            commentDto2.Date = comment2.Date;
            commentDto2.Id = comment2.Id;
            commentDto2.IdArticle = comment2.IdArticle;

            commentDto3.Content = comment3.Content;
            commentDto3.Date = comment3.Date;
            commentDto3.Id = comment3.Id;
            commentDto3.IdArticle = comment3.IdArticle;

            var allComments = new List<Comment>();
            allComments.Add(comment);
            allComments.Add(comment2);
            allComments.Add(comment3);

            var allCommentsDto = new List<CommentDto>();
            allCommentsDto.Add(commentDto);
            allCommentsDto.Add(commentDto2);
            allCommentsDto.Add(commentDto3);

            var dbContext = new Mock<TrainingsDemoContext>(options);
            var mockMapper = new Mock<IMapper>();
            mockMapper.Setup(sp => sp.Map<IEnumerable<CommentDto>>(allComments)).Returns(allCommentsDto);
            var mockCommentsService = new Mock<CommentsService>(dbContext.Object);
            mockCommentsService.Setup(sp => sp.GetAllCommentsByArticleId(10)).ReturnsAsync(allComments);

            var controller = new CommentController(mockCommentsService.Object, mockMapper.Object);

            //Act
            var result = await controller.GetAllCommentsByArticleId(10);
            var resultList = result.ToList();

            //Assert
            Assert.Equal(allComments[0].Id, resultList[0].Id);
            Assert.Equal(allComments[1].Id, resultList[1].Id);
            Assert.Equal(allComments[2].Id, resultList[2].Id);
        }
    }
}
