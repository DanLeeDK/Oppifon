using System;
using System.ComponentModel.DataAnnotations;

namespace DAL.Models
{
    public class Tag
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }

        // Backwards navigation
        public Guid UserId { get; set; }
        public User User { get; set; }
        
        public Guid CategoryId { get; set; }
        public Category Category { get; set; }

        public Guid MainFieldsExpertId { get; set; }
        public Expert MainFieldsExpert { get; set; }

        public Guid ExpertTagsExpertId { get; set; }
        public Expert ExpertTagsExpert { get; set; }
    }
}
