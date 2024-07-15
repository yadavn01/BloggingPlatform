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

   [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
   [HttpPost]
   public async Task<IActionResult> CreateBlogPost([FromBody] BlogPost blogPost)
{
    _logger.LogInformation("CreateBlogPosts called");

    // Extract the user email (AuthorEmail) from the claims
    var authorEmail = User.FindFirstValue(ClaimTypes.Email);
    _logger.LogInformation($"Author Email retrieved: {authorEmail}");

    if (string.IsNullOrEmpty(authorEmail))
    {
        _logger.LogWarning("User email not found in token");
        return Unauthorized("User email not found in token");
    }

    try
    {
        // Assign the extracted AuthorEmail to the blogPost object
        blogPost.AuthorId = authorEmail;
        blogPost.CreatedAt = DateTime.UtcNow;

        // Validate the model state
        if (!TryValidateModel(blogPost))
        {
            return BadRequest(ModelState);
        }

        // Add the blogPost to the database context
        _context.BlogPosts.Add(blogPost);
        // Save the changes to the database
        await _context.SaveChangesAsync();

        _logger.LogInformation("Blog post created successfully");
        return CreatedAtAction(nameof(GetBlogPosts), new { id = blogPost.Id }, blogPost);
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "Error creating blog post");
        return StatusCode(500, "Internal server error");
    }
}
}