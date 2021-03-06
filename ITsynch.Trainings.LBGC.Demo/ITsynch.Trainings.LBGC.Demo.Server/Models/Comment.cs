using System;

namespace ITsynch.Trainings.LBGC.Demo.Models
{
    public class Comment : BaseEntity
    {
        public virtual User User { get; set; }

        public virtual string Content { get; set; }

        public virtual DateTime Date { get; set; }

        public virtual long IdArticle { get; set; }

    }
}