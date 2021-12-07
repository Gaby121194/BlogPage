using ITsynch.Trainings.LBGC.Demo.Models;
using ITsynch.Trainings.LBGC.Demo.Persistence;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITsynch.Trainings.LBGC.Demo.Services
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
