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
            //Many to many experts and tags
            modelBuilder.Entity<ExpertTag>()
               .HasKey(e => new {e.ExpertId, e.TagId});

            modelBuilder.Entity<ExpertTag>()
                .HasOne(et => et.Expert)
                .WithMany(e => e.ExpertTags)
                .HasForeignKey(et => et.ExpertId);

            modelBuilder.Entity<ExpertTag>()
                .HasOne(et => et.Tag)
                .WithMany(t => t.ExpertsTags)
                .HasForeignKey(et => et.TagId);

            // Many to many users and tags
            modelBuilder.Entity<UserTag>()
                .HasKey(u => new { u.UserId, u.TagId });

            modelBuilder.Entity<UserTag>()
                .HasOne(ut => ut.User)
                .WithMany(u => u.InterestTags)
                .HasForeignKey(ut => ut.UserId);

            modelBuilder.Entity<UserTag>()
                .HasOne(ut => ut.Tag)
                .WithMany(t => t.UsersTags)
                .HasForeignKey(et => et.TagId);
        }
    }
}
