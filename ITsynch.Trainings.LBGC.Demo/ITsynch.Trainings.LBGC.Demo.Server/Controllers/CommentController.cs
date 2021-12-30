using AutoMapper;
using ITsynch.Trainings.LBGC.Demo.DataTransfer;
using ITsynch.Trainings.LBGC.Demo.Models;
using ITsynch.Trainings.LBGC.Demo.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ITsynch.Trainings.LBGC.Demo.Controllers
{
    [Route("comments")]
    [ApiController]
    public class CommentController : ControllerBase
    {

        private readonly CommentsService commentsService;
        private readonly IMapper mapper;

        public CommentController(CommentsService commentsService, IMapper mapper)
        {
            this.commentsService = commentsService
                ?? throw new ArgumentNullException(nameof(commentsService));

            this.mapper = mapper
                ?? throw new ArgumentNullException(nameof(mapper));
        }

        // GET api/<CommentController>/5
        [HttpGet("{id}")]
        public async Task<IEnumerable<CommentDto>> GetAllCommentsByArticleId(long id)
        {
            var comment = await this.commentsService.GetAllCommentsByArticleId(id);
            return mapper.Map<IEnumerable<CommentDto>>(comment);
        }

        // POST api/<CommentController>
        [HttpPost]
        public async Task<CommentDto> PostComment(CommentDto comment)
        {
            var _comment = await this.commentsService.CreateComment(comment);
            return mapper.Map<CommentDto>(_comment);
        }

        // PUT api/<CommentController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CommentController>/5
        [HttpDelete("{id}")]
        public async Task<CommentDto> Delete(long id)
        {
            var comment = await this.commentsService.DeleteComment(id);
            return mapper.Map<CommentDto>(comment);
        }
    }
}
