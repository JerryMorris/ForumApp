using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FF1.Models;
using FF1.Data;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FF1.API
{
    [Route("api/[controller]")]
    public class TopicController : Controller
    {
        private ApplicationDbContext _db;
        public TopicController(ApplicationDbContext db)
        {
            _db = db;
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<Topic> Get()
        {
            return _db.Topic.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var topic = _db.Topic.Where(t => t.Id == id).FirstOrDefault();
            return Ok(topic);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Topic topic)
        {
            if (topic.Id == 0)
            {

                _db.Add(topic);
                _db.SaveChanges();
            }
            return Ok(topic);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Topic topic)
        {
            _db.Topic.Where(t => t.Id == id).FirstOrDefault();
            _db.Update(topic);
            _db.SaveChanges();
            return Ok(topic);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var topic = _db.Topic.Where(t => t.Id == id).FirstOrDefault();
            _db.Remove(topic);
            _db.SaveChanges();
            return Ok(topic);
        }
    }
}
