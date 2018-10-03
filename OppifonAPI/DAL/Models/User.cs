using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
        public DateTime Birthday { get; set; }
        public List<Tag> InterestTags { get; set; }
        public string Gender { get; set; }
        public Calender Calender { get; set; }
    }
}
