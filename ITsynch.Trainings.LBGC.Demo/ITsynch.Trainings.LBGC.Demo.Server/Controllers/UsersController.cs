using AutoMapper;
using ITsynch.Trainings.LBGC.Demo.DataTransfer;
using ITsynch.Trainings.LBGC.Demo.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ITsynch.Trainings.LBGC.Demo.Controllers
{
    [ApiController]
    [Route("users")]
    public class UsersController : ControllerBase
    {
        private readonly UsersService usersService;
        private readonly IMapper mapper;

        public UsersController(
            UsersService usersService,
            IMapper mapper)
        {
            this.usersService = usersService
                ?? throw new ArgumentNullException(nameof(usersService));

            this.mapper = mapper
                ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet]
        [Route("")]
        public async Task<IEnumerable<UserDto>> GetAllUsersAsync()
        {
            var users = await this.usersService.GetAllUsersAsync();
            return mapper.Map<IEnumerable<UserDto>>(users);
        }


    }
}
