using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.ManyToMany
{
    public class UserTag
    {
        public Guid UserId { get; set; }
        public User User { get; set; }
        public Guid TagId { get; set; }
        public Tag Tag { get; set; }
    }
}
