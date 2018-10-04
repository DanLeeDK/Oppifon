using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DAL.Models
{
    public class Calender
    {
        [Key]
        public Guid Id { get; set; }
        public ICollection<Appointment> Appointments { get; set; }
        public ICollection<DayOff> DaysOff { get; set; }
        public ICollection<WorkDay> WorkDays { get; set; }
        public TimeSpan DefaultDuration { get; set; }
    }
}
