using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public class Calender
    {
        public Guid Id { get; set; }
        public List<Appointment> Appointments { get; set; }
        public List<DateTime> OffDays { get; set; }
        public List<WorkDay> WorkDays { get; set; }
        public TimeSpan DefaultDuration { get; set; }
    }
}
