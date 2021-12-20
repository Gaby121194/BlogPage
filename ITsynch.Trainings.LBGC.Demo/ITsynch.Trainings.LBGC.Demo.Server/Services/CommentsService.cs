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

        public CommentsService(
            TrainingsDemoContext trainingsDemoContext)
        {
            this.trainingsDemoContext = trainingsDemoContext
                ?? throw new ArgumentNullException(nameof(trainingsDemoContext));
        }

        public async Task<IEnumerable<Comment>> GetAllCommentsByArticleId(long id)
        {
            var comments = await this.trainingsDemoContext.Comments.Where(comment => comment.IdArticle == id)
                                                             .OrderByDescending(art => art.Date)
                                                             .Include(comment => comment.User)
                                                             .ToListAsync();
            return comments.AsEnumerable();
        }

        public async Task<Comment> CreateComment(Comment comment)
        {
            var user = trainingsDemoContext.Users.FirstOrDefault(user => user.Id == comment.User.Id);
            comment.User = user;
            var _comment = this.trainingsDemoContext.Add<Comment>(comment);
            var result = await this.trainingsDemoContext.SaveChangesAsync();
            return comment;
        }
    }
}