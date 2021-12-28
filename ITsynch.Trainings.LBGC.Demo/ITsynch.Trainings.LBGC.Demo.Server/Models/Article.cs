

using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace ITsynch.Trainings.LBGC.Demo.Models
{
    public class Article : BaseEntity
    {
        public virtual string Title { get; set; }

        public virtual string Content { get; set; }

        public virtual bool Delete { get; set; }

        public virtual string Category { get; set; }

        public virtual User User { get; set; }

        [JsonIgnore]
        public virtual ICollection<User> FavoritesUsers { get; set; }
        public virtual DateTime Date { get; set; }
    }
}
