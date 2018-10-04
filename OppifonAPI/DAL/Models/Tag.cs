using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using DAL.Models.ManyToMany;

namespace DAL.Models
{
    public class Tag
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }

        public ICollection<ExpertTag> ExpertsTags { get; set; }
        public ICollection<ExpertTag> ExpertsMainField { get; set; }
        public ICollection<UserTag> UsersTags { get; set; }
        
        // Backwards navigation
        //public Guid UserId { get; set; }
        //public User User { get; set; }

        //public Guid CategoryId { get; set; }
        //public Category Category { get; set; }

        //public Guid MainFieldsExpertId { get; set; }
        //public Expert MainFieldsExpert { get; set; }

        //public Guid ExpertTagsExpertId { get; set; }
        //public Expert ExpertTagsExpert { get; set; }
    }
}
