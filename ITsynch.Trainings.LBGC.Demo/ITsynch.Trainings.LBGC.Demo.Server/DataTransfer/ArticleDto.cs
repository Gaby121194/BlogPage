using ITsynch.Trainings.LBGC.Demo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITsynch.Trainings.LBGC.Demo.DataTransfer
{
    public class ArticleDto
    {
        public virtual long Id { get; set; }

        public virtual string Title { get; set; }

        public virtual string Content { get; set; }

        public virtual bool Delete { get; set; }

<<<<<<< HEAD
        public virtual bool Draft { get; set; }
=======
        public virtual string Category { get; set; }
>>>>>>> dev

        public virtual User User { get; set; }

        public virtual DateTime Date { get; set; }
    }
}
