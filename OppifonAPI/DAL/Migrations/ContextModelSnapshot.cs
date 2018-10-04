﻿// <auto-generated />
using System;
using DAL.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DAL.Migrations
{
    [DbContext(typeof(Context))]
    partial class ContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.3-rtm-32065")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DAL.Models.Appointment", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("CalenderId");

                    b.Property<TimeSpan>("Duration");

                    b.Property<int>("MaxParticipants");

                    b.Property<string>("Text");

                    b.Property<DateTime>("Time");

                    b.HasKey("Id");

                    b.HasIndex("CalenderId");

                    b.ToTable("Appointments");
                });

            modelBuilder.Entity("DAL.Models.Calender", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<TimeSpan>("DefaultDuration");

                    b.HasKey("Id");

                    b.ToTable("Calenders");
                });

            modelBuilder.Entity("DAL.Models.Category", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("DAL.Models.Expert", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("CategoryId");

                    b.Property<string>("Description");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Experts");
                });

            modelBuilder.Entity("DAL.Models.Offday", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("CalenderId");

                    b.Property<DateTime>("OffDay");

                    b.HasKey("Id");

                    b.HasIndex("CalenderId");

                    b.ToTable("Offday");
                });

            modelBuilder.Entity("DAL.Models.Review", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Anonymity");

                    b.Property<string>("Name");

                    b.Property<int>("Rating");

                    b.Property<string>("ReviewText");

                    b.HasKey("Id");

                    b.ToTable("Reviews");
                });

            modelBuilder.Entity("DAL.Models.Tag", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("CategoryId");

                    b.Property<Guid>("ExpertTagsExpertId");

                    b.Property<Guid>("MainFieldsExpertId");

                    b.Property<string>("Name");

                    b.Property<Guid>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.HasIndex("ExpertTagsExpertId");

                    b.HasIndex("MainFieldsExpertId");

                    b.HasIndex("UserId");

                    b.ToTable("Tags");
                });

            modelBuilder.Entity("DAL.Models.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("AppointmentId");

                    b.Property<DateTime>("Birthday");

                    b.Property<Guid?>("CalenderId");

                    b.Property<string>("City");

                    b.Property<string>("FirstName");

                    b.Property<string>("Gender");

                    b.Property<string>("LastName");

                    b.HasKey("Id");

                    b.HasIndex("AppointmentId");

                    b.HasIndex("CalenderId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("DAL.Models.WorkDay", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("CalenderId");

                    b.Property<int>("DayOfWeek");

                    b.Property<DateTime>("EndHour");

                    b.Property<DateTime>("StartHour");

                    b.HasKey("Id");

                    b.HasIndex("CalenderId");

                    b.ToTable("WorkDays");
                });

            modelBuilder.Entity("DAL.Models.Appointment", b =>
                {
                    b.HasOne("DAL.Models.Calender", "Calender")
                        .WithMany("Appointments")
                        .HasForeignKey("CalenderId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DAL.Models.Expert", b =>
                {
                    b.HasOne("DAL.Models.Category", "Category")
                        .WithMany()
                        .HasForeignKey("CategoryId");
                });

            modelBuilder.Entity("DAL.Models.Offday", b =>
                {
                    b.HasOne("DAL.Models.Calender", "Calender")
                        .WithMany("OffDays")
                        .HasForeignKey("CalenderId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DAL.Models.Tag", b =>
                {
                    b.HasOne("DAL.Models.Category", "Category")
                        .WithMany("Tags")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DAL.Models.Expert", "ExpertTagsExpert")
                        .WithMany("ExpertTags")
                        .HasForeignKey("ExpertTagsExpertId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DAL.Models.Expert", "MainFieldsExpert")
                        .WithMany("MainFields")
                        .HasForeignKey("MainFieldsExpertId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DAL.Models.User", "User")
                        .WithMany("InterestTags")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("DAL.Models.User", b =>
                {
                    b.HasOne("DAL.Models.Appointment", "Appointment")
                        .WithMany("Participants")
                        .HasForeignKey("AppointmentId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("DAL.Models.Calender", "Calender")
                        .WithMany()
                        .HasForeignKey("CalenderId");
                });

            modelBuilder.Entity("DAL.Models.WorkDay", b =>
                {
                    b.HasOne("DAL.Models.Calender", "Calender")
                        .WithMany("WorkDays")
                        .HasForeignKey("CalenderId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
