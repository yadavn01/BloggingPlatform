using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Logging; 
using System.Security.Claims;
using System.Text;



[Route("api/[controller]")]
[ApiController]

public class BlogPostsController : ControllerBase
{
     private readonly ApplicationDbContext _context;

     public BlogPostsController(ApplicationDbContext context)
     {
        _context = context;
     }

     [HttpGet]
     public async Task<IActionResult> GetBlogPosts()
     {
        var blogposts = _context.BlogPosts.ToListAsync();
        return Ok(blogposts);
     }

     [Authorize]
     [HttpPost]
     public async Task<IActionResult> CreateBlogPost([FromBody] BlogPost blogPost)
     {
        var authorEmail = User.FindFirstValue(ClaimTypes.Email);
        if (string.IsNullOrEmpty(authorEmail))
        {
            return Unauthorized("User email not found in token");
        }
        blogPost.AuthorId = authorEmail;
        blogPost.CreatedAt = DateTime.UtcNow;
        _context.BlogPosts.Add(blogPost);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetBlogPosts), new { id = blogPost.Id }, blogPost);
     }
}