using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace ITsynch.Trainings.LBGC.Demo.Models
{
    public class User : BaseEntity
    {
        public virtual string Username { get; set; }

        public virtual string FirstName { get; set; }

        public virtual string LastName { get; set; }

        [JsonIgnore]
        public virtual ICollection<Article> FavoritesArticles { get; set; }
    }
}
