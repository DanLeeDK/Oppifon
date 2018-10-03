using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DAL.Models
{
    public class User
    {
        [Key]
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
        public DateTime Birthday { get; set; }
        public ICollection<Tag> InterestTags { get; set; }
        public string Gender { get; set; }
        public Calender Calender { get; set; }

        // Backwards navigation
        public Guid AppointmentId { get; set; }
        public Appointment Appointment { get; set; }
    }
}
