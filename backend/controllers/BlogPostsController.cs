using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

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
     
     [HttpPost]
     public async Task<IActionResult> CreateBlogPost([FromBody] BlogPost blogPost)
     {
        blogPost.CreatedAt = DateTime.UtcNow;
        _context.BlogPosts.Add(blogPost);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetBlogPosts), new { id = blogPost.Id }, blogPost);
     }
}