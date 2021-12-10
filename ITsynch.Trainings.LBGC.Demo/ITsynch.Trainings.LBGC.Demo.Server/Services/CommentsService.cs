using ITsynch.Trainings.LBGC.Demo.Models;
using ITsynch.Trainings.LBGC.Demo.Persistence;
using System;
using System.Collections.Generic;
using System.Data.Entity;
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
            var comments = await this.trainingsDemoContext.Comments.ToListAsync();
            return comments.AsEnumerable();
        }
    }
}
