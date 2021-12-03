using ITsynch.Trainings.Demo.Template.Models;
using ITsynch.Trainings.Demo.Template.Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITsynch.Trainings.Demo.Template.Services
{
    public class UsersService
    {
        private readonly TrainingsDemoContext trainingsDemoContext;

        public UsersService(
            TrainingsDemoContext trainingsDemoContext)
        {
            this.trainingsDemoContext = trainingsDemoContext
                ?? throw new ArgumentNullException(nameof(trainingsDemoContext));
        }

        public async Task<IEnumerable<User>> GetAllUsersAsync()
        {
            var users = await this.trainingsDemoContext.Users.ToListAsync();
            return users.AsEnumerable();
        }
    }
}
