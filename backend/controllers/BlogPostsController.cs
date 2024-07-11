using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging; 
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

     private readonly ILogger<AuthController> _logger;

     public BlogPostsController(ApplicationDbContext context, ILogger<AuthController> logger)
     {
        _context = context;
        _logger = logger;
     }

     [HttpGet]
     public async Task<IActionResult> GetBlogPosts()
     {
      _logger.LogInformation("GetBlogPosts called");
        var blogposts = _context.BlogPosts.ToListAsync();
        return Ok(blogposts);
     }

     [Authorize]
     [HttpPost]
     public async Task<IActionResult> CreateBlogPost([FromBody] BlogPost blogPost)
   {
        _logger.LogInformation("CreateBlogPost called");

        var authorId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        _logger.LogInformation($"Author ID retrieved: {authorId}");

        if (string.IsNullOrEmpty(authorId))
        {
            _logger.LogWarning("User ID not found in token");
            return Unauthorized("User ID not found in token");
        }

        blogPost.AuthorId = authorId;
        blogPost.CreatedAt = DateTime.UtcNow;
        _context.BlogPosts.Add(blogPost);
        await _context.SaveChangesAsync();

        _logger.LogInformation("Blog post created successfully");
        return CreatedAtAction(nameof(GetBlogPosts), new { id = blogPost.Id }, blogPost);
    }
}