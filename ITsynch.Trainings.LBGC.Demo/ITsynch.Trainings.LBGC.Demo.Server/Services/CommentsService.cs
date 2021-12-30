using AutoMapper;
using ITsynch.Trainings.LBGC.Demo.DataTransfer;
using ITsynch.Trainings.LBGC.Demo.Models;
using ITsynch.Trainings.LBGC.Demo.Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITsynch.Trainings.LBGC.Demo.Services
{
    public class CommentsService
    {
        private readonly TrainingsDemoContext trainingsDemoContext;
        private readonly IMapper mapper;

        public CommentsService(
            TrainingsDemoContext trainingsDemoContext, IMapper mapper)
        {
            this.trainingsDemoContext = trainingsDemoContext
                ?? throw new ArgumentNullException(nameof(trainingsDemoContext));

            this.mapper = mapper
                ?? throw new ArgumentNullException(nameof(mapper));
        }

        public virtual async Task<IEnumerable<Comment>> GetAllCommentsByArticleId(long id)
        {
            var comments = await this.trainingsDemoContext.Comments.Where(comment => comment.IdArticle == id)
                                                             .OrderByDescending(art => art.Date)
                                                             .Include(comment => comment.User)
                                                             .ToListAsync();
            return comments.AsEnumerable();
        }

        public virtual async Task<Comment> CreateComment(CommentDto commentDto)
        {
            var user = trainingsDemoContext.Users.FirstOrDefault(user => user.Id == commentDto.User.Id);
            var comment = mapper.Map<Comment>(commentDto);
            comment.User = user;
            var _comment = this.trainingsDemoContext.Add<Comment>(comment);
            await this.trainingsDemoContext.SaveChangesAsync();
            return comment;
        }

        public async Task<Comment> DeleteComment(long id)
        {
            var comment = this.trainingsDemoContext.Comments.FirstOrDefault(comment => comment.Id == id);
            this.trainingsDemoContext.Comments.Remove(comment);
            await this.trainingsDemoContext.SaveChangesAsync();

            return comment;
        }
    }
}