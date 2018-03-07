using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FF1.Models
{
    public class Reply: Audit
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public int Likes { get; set; }
        public int PostId { get; set; }
        public int ReplyId { get; set; }
        public string UserID { get; set; }
        public int Replies { get; set; }


    }
}
