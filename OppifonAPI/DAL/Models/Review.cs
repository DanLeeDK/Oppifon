using System;

namespace DAL.Models
{
    public class Review
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ReviewText { get; set; }
        public int Rating { get; set; }
        public bool Anonymity { get; set; }
    }
}
