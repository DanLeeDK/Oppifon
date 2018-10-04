using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.ManyToMany
{
    public class UserAppointment
    {
        public Guid UserId { get; set; }
        public Guid AppointmentId { get; set; }
        public User User { get; set; }
        public Appointment Appointment { get; set; }
    }
}
