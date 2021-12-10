using System;

namespace ITsynch.Trainings.LBGC.Demo.DataTransfer
{
    public class CommentDto
    {
        public virtual long Id { get; set; }

        public virtual string Username { get; set; }

        public virtual string Content { get; set; }

        public virtual DateTime Date { get; set; }
    }
}
