using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FF1.Models;
using FF1.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FF1.API
{
    [Route("api/[controller]")]
    public class ReplyController : Controller
    {
        private ApplicationDbContext _db;
        private readonly UserManager<ApplicationUser> _userManager;
        public ReplyController(ApplicationDbContext db, UserManager<ApplicationUser> userManager)
        {
            _db = db;
            _userManager = userManager;
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<Reply> Get()
        {
            return _db.Reply.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var reply = _db.Reply.Where(r => r.Id == id).FirstOrDefault();
            return Ok(reply);
        }

        [HttpGet("{id}")]
        [Route("getpostreplies")]
        public IActionResult GetPostReplies(int id)
        {
            var reply = _db.Reply.Where(r => r.PostId == id).Where(r => r.IsActive == true).ToList();
            return Ok(reply);
        }

        [HttpGet]
        [Route("getrepliestoreply")]
        [Authorize]
        public IActionResult GetRepliesToReply(int id)
        {

            var reply = _db.Reply.Where(r => r.ReplyId == id).Where(r => r.IsActive == true).ToList();
            return Ok(reply);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Reply reply)
        {
            reply.UserID = _userManager.GetUserName(this.User);
            reply.IsActive = true;
            _db.Add(reply);
            _db.SaveChanges();
            return Ok(reply);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Reply reply)
        {
            _db.Reply.Where(r => r.Id == id).FirstOrDefault();
            _db.Update(reply);
            _db.SaveChanges();
            return Ok(reply);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var reply = _db.Reply.Where(r => r.Id == id).FirstOrDefault();
            _db.Remove(reply);
            _db.SaveChanges();
            return Ok(reply);
        }
    }
}
