using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FF1.ViewModels.AccountViewModels
{
    public class UserViewModel
    {
        public string UserName { get; set; }

        public Dictionary<string, string> Claims { get; set; }
    }
}
