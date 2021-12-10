using AutoMapper;
using ITsynch.Trainings.LBGC.Demo.DataTransfer;
using ITsynch.Trainings.LBGC.Demo.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITsynch.Trainings.LBGC.Demo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CommentController : ControllerBase
    {
        private readonly CommentsService commentsService;
        private readonly IMapper mapper;

        public CommentsService(
            CommentsService commentsService,
            IMapper mapper)
        {
            this.commentsService = commentsService
                ?? throw new ArgumentNullException(nameof(commentsService));

            this.mapper = mapper
                ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet]
        [Route("")]
        public async Task<IEnumerable<CommentDto>> GetAllCommentAsync()
        {
            var comment = await this.commentsService.GetAllCommentAsync();
            return mapper.Map<IEnumerable<CommentDto>>(comment);
        }
    }
}
