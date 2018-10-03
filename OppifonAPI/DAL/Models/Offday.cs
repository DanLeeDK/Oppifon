using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class Offday
    {
        public Guid Id { get; set; }
        public DateTime OffDay { get; set; }

        // Backwards navigation
        public Guid CalenderId { get; set; }
        public Calender Calender { get; set; }
    }
}
