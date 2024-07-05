using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : IdentityDbContext<IdentityUser>
{
    public DbSet<BlogPost> BlogPosts { get; set; }
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
    :base(options)
    {

    }
}