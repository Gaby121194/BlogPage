using ITsynch.Trainings.Demo.Template.Models;
using Microsoft.EntityFrameworkCore;

namespace ITsynch.Trainings.Demo.Template.Persistence
{
    public class TrainingsDemoContext : DbContext
    {
        public TrainingsDemoContext(DbContextOptions<TrainingsDemoContext> dbContextOptions) 
            : base(dbContextOptions)
        {

        }

        public virtual DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            var users = modelBuilder.Entity<User>();

            users.ToTable("users");

            users.HasKey(x => x.Id);

            users.Property(x => x.Username)
                .IsRequired();

            users.Property(x => x.FirstName)
                .IsRequired();

            users.Property(x => x.LastName)
                .IsRequired();
        }
    }
}
