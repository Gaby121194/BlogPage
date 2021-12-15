

using System;

namespace ITsynch.Trainings.LBGC.Demo.Models
{
    public class Article : BaseEntity
    {
        public virtual string Title { get; set; }

        public virtual string Content { get; set; }


        public virtual User User { get; set; }

        public virtual DateTime Date { get; set; }
    }
}
