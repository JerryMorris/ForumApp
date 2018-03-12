using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FF1.Models
{
    public class Post: Audit
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Message { get; set; }
        public int Likes { get; set; }
        public int Replys { get; set; }
        public string UserId { get; set; }
        public int TopicId { get; set; }


    }
}
