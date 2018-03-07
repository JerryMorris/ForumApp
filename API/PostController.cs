using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FF1.Models;
using FF1.Data;
using Microsoft.AspNetCore.Identity;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FF1.API
{
    [Route("api/[controller]")]
    public class PostController : Controller
    {
        private ApplicationDbContext _db;
        private readonly UserManager<ApplicationUser> _userManager;
        public PostController(ApplicationDbContext db, UserManager<ApplicationUser> userManager)
        {
            _db = db;
            _userManager = userManager;
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<Post> Get()
        {
            return _db.Post.ToList();

        }

        // GET api/values/5
        [HttpGet]
        [Route("getuserposts")]
        public IActionResult GetUserPosts()
        {
            var userId = _userManager.GetUserName(this.User);
            var posts = _db.Post.Where(p => p.UserId == userId).ToList();
            return Ok(posts);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _db.Post.Where(p => p.Id == id).Where(p => p.IsActive == true).FirstOrDefault();
            return Ok(post);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Post post)
        {
            post.UserId = _userManager.GetUserName(this.User);
            post.IsActive = true;
            post.TimeCreated = DateTime.Today;
            _db.Add(post);
            _db.SaveChanges();
            return Ok(post);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Post post)
        {
            _db.Post.Where(p => p.Id == id).FirstOrDefault();
            _db.Update(post);
            _db.SaveChanges();
            return Ok(post);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var post = _db.Post.Where(p => p.Id == id).FirstOrDefault();
            _db.Remove(post);
            _db.SaveChanges();
            return Ok(post);
        }
    }
}
