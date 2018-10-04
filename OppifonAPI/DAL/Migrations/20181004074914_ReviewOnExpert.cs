using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class ReviewOnExpert : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ExpertId",
                table: "Reviews",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_ExpertId",
                table: "Reviews",
                column: "ExpertId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Experts_ExpertId",
                table: "Reviews",
                column: "ExpertId",
                principalTable: "Experts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Experts_ExpertId",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_Reviews_ExpertId",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "ExpertId",
                table: "Reviews");
        }
    }
}
