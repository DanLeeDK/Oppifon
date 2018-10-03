using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public class Expert
    {
        public Guid Id { get; set; }
        public Category Category { get; set; }
        public List<Tag> ExpertTags { get; set; }
        public string Description { get; set; }
        public List<Tag> MainFields { get; set; }
    }
}
