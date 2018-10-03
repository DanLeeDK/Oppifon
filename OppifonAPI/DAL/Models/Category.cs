using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public class Category
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public List<Tag> Tags { get; set; }
    }
}
