using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DAL.Models
{
    public class Expert
    {
        [Key]
        public Guid Id { get; set; }
        public Category Category { get; set; }
        public ICollection<Tag> ExpertTags { get; set; }
        public string Description { get; set; }
        public ICollection<Tag> MainFields { get; set; }
    }
}
