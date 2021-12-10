using System;

namespace ITsynch.Trainings.LBGC.Demo.Models
{
    public class Comment : BaseEntity
    {
        public virtual string Username { get; set; }

        public virtual string Content { get; set; }

        public virtual DateTime Date { get; set; }
    }
}