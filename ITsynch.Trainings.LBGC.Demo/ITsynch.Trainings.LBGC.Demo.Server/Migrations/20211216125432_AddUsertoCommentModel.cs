using Microsoft.EntityFrameworkCore.Migrations;

namespace ITsynch.Trainings.LBGC.Demo.Migrations
{
    public partial class AddUsertoCommentModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Username",
                table: "comments");

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "comments",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_comments_UserId",
                table: "comments",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_comments_users_UserId",
                table: "comments",
                column: "UserId",
                principalTable: "users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_comments_users_UserId",
                table: "comments");

            migrationBuilder.DropIndex(
                name: "IX_comments_UserId",
                table: "comments");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "comments");

            migrationBuilder.AddColumn<string>(
                name: "Username",
                table: "comments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
