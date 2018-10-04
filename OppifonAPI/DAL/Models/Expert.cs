using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class Expert
    {
        [Key]
        public Guid Id { get; set; }
        public Category Category { get; set; }
        public string Description { get; set; }
        [InverseProperty("ExpertTagsExpert")]
        public ICollection<Tag> ExpertTags { get; set; }
        [InverseProperty("MainFieldsExpert")]
        public ICollection<Tag> MainFields { get; set; }
    }
}
