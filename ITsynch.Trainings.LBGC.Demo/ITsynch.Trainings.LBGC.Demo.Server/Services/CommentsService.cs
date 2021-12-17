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

        public async Task<IEnumerable<Comment>> GetAllCommentAsync()
        {
            var comments = await trainingsDemoContext.Comments.ToListAsync();
            return comments.AsEnumerable();
        }

        public async Task<IEnumerable<Comment>> GetAllCommentsById(long id)
        {
            var comments = this.trainingsDemoContext.Comments.OrderByDescending(art => art.Date);
            return comments.AsEnumerable();
        }

        //var article = trainingsDemoContext.Articles.Where(article => article.Id == id).Include(article => article.User).FirstOrDefault();
        public async Task<Comment> GetCommentById(long id)
        {
            var comment = trainingsDemoContext.Comments.Where(comment => comment.IdArticle == id).Include(comment => comment.User).FirstOrDefault();
            //var comment = trainingsDemoContext.Comments.FindAsync(id);
            return comment;

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