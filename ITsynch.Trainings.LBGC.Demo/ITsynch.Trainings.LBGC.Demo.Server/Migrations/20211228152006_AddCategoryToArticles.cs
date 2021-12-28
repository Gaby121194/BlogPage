using Microsoft.EntityFrameworkCore.Migrations;

namespace ITsynch.Trainings.LBGC.Demo.Migrations
{
    public partial class AddCategoryToArticles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "articles",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Category",
                table: "articles");
        }
    }
}
