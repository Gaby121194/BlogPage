﻿using ITsynch.Trainings.LBGC.Demo.Models;
using Microsoft.EntityFrameworkCore;

namespace ITsynch.Trainings.LBGC.Demo.Persistence
{
    public class TrainingsDemoContext : DbContext
    {
        public TrainingsDemoContext(DbContextOptions<TrainingsDemoContext> dbContextOptions) 
            : base(dbContextOptions)
        {

        }

        public virtual DbSet<User> Users { get; set; }

        public virtual DbSet<Article> Articles { get; set; }

        public virtual DbSet<Comment> Comments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            var users = modelBuilder.Entity<User>();
            
            //Users
            users.ToTable("users");

            users.HasKey(x => x.Id);

            users.Property(x => x.Username)
                .IsRequired();

            users.Property(x => x.FirstName)
                .IsRequired();

            users.Property(x => x.LastName)
                .IsRequired();

            //Articles
            var articles = modelBuilder.Entity<Article>();

            articles.ToTable("articles");

            articles.HasKey(x => x.Id);

            articles.Property(x => x.Content)
                .IsRequired();

            articles.Property(x => x.Title)
                .IsRequired();

            articles.Property(x => x.Date)
                .IsRequired();

            articles.HasOne(x => x.User)
                    .WithMany();

            articles.Navigation(x => x.User)
            .UsePropertyAccessMode(PropertyAccessMode.Property);
        }
    }
}
