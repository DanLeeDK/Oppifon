using System;

namespace DAL.Models
{
    public class WorkDay
    {
        public Guid Id { get; set; }
        public DateTime StartHour { get; set; }
        public DateTime EndHour { get; set; }
        public DayOfWeek DayOfWeek { get; set; }
    }
}
