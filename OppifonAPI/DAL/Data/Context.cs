using System;
using System.Collections.Generic;
using System.Text;
using DAL.Models;
using DAL.Models.ManyToMany;
using Microsoft.EntityFrameworkCore;

namespace DAL.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {}
        public DbSet<User> Users { get; set; }
        public DbSet<Expert> Experts { get; set; }
        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<Calender> Calenders { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<WorkDay> WorkDays { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Calender>()
                .HasOne(x => x.OffDays);
            //    .WithMany(x => x.)
            //    .HasKey(bc => new { bc.UserId, bc.AppointmentId });

            //modelBuilder.Entity<UserAppointment>()
            //    .HasOne(bc => bc.User)
            //    .WithMany(b => b.Calender.Appointments)
            //    .HasForeignKey(bc => bc.UserId);

            //modelBuilder.Entity<UserAppointment>()
            //    .HasOne(bc => bc.Appointment)
            //    .WithMany(c => c.Participants)
            //    .HasForeignKey(bc => bc.AppointmentId);
        }


    }
}
