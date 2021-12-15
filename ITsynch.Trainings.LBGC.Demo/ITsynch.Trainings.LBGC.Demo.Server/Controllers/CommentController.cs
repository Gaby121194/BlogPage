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
    [Route("comment")]
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

        // GET: api/<CommentController>
        [HttpGet]
        public async Task<IEnumerable<CommentDto>> GetAllCommentAsync()
        {
            var comment = await this.commentsService.GetAllCommentAsync();
            return mapper.Map<IEnumerable<CommentDto>>(comment);
        }

        // GET api/<CommentController>/5
        [HttpGet("{id}")]
        public async Task<Comment> GetCommentsById(long id)
        {
            var comment = await this.commentsService.GetCommentById(id);
            return comment;
        }

        // POST api/<CommentController>
        [HttpPost]
        public async Task<CommentDto> PostComment(Comment comment)
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
        public void Delete(int id)
        {
        }
    }
}
