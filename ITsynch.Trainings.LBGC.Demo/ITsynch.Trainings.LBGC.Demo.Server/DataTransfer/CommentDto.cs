using ITsynch.Trainings.LBGC.Demo.Models;
using System;

namespace ITsynch.Trainings.LBGC.Demo.DataTransfer
{
    public class CommentDto
    {
        public virtual long Id { get; set; }

        public virtual User User { get; set; }

        public virtual string Content { get; set; }

        public virtual DateTime Date { get; set; }

        public virtual long IdArticle { get; set; }
    }
}
