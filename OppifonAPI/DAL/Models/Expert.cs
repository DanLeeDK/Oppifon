using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DAL.Models.ManyToMany;

namespace DAL.Models
{
    public class Expert
    {
        [Key]
        public Guid Id { get; set; }
        public Category Category { get; set; }
        public string Description { get; set; }
        public ICollection<ExpertTag> ExpertTags { get; set; }
        public ICollection<ExpertTag> MainFields { get; set; }
        public ICollection<Review> Reviews { get; set; }
    }
}
