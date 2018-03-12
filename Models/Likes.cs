using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FF1.Models
{
    public class Likes
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        public string UserIdForPost { get; set; }
        public string UserIdLikedPost { get; set; }
        public int NumOfLikes { get; set; }
        public int ReplyId { get; set; }


    }
}
