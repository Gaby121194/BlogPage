namespace ITsynch.Trainings.Demo.Template.Models
{
    public class User : BaseEntity
    {
        public virtual string Username { get; set; }

        public virtual string FirstName { get; set; }

        public virtual string LastName { get; set; }
    }
}
