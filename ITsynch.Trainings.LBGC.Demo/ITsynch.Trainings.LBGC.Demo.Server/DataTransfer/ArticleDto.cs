﻿using System;
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

        public virtual string UserName { get; set; }

        public virtual DateTime Date { get; set; }
    }
}