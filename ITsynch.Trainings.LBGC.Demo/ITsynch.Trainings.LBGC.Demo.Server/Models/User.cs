namespace ITsynch.Trainings.LBGC.Demo.Models
{
    public class User : BaseEntity
    {
        public virtual string Username { get; set; }

        public virtual string FirstName { get; set; }

        public virtual string LastName { get; set; }
    }
}
