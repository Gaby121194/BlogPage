using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITsynch.Trainings.LBGC.Demo.Models
{
    public class ArticleFilter
    {
        public string SearchTitle { get; set; }

        public IEnumerable<long> SearchAuthors{ get; set; }

        public DateTime? MinDate { get; set; }

        public DateTime? MaxDate { get; set; }

    }
}
