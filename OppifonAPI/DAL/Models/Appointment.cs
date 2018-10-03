using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public class Appointment
    {
        public Guid Id { get; set; }
        public DateTime Time { get; set; }
        public string Text { get; set; }
        public List<User> Participants { get; set; }
        public TimeSpan Duration { get; set; }
        public int MaxParticipants { get; set; }
    }
}
