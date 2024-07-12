using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Logging; 
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BloggingPlatform.Models;
using Microsoft.Extensions.Configuration;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly UserManager<IdentityUser> _userManager;
    private readonly SignInManager<IdentityUser> _signInManager;
    private readonly IConfiguration _configuration;
    private readonly ILogger<AuthController> _logger;

    public AuthController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, IConfiguration configuration, ILogger<AuthController> logger)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _configuration = configuration;
        _logger = logger; 
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterModel model)
    {
        var user = new IdentityUser { UserName = model.Email, Email = model.Email };
        var result = await _userManager.CreateAsync(user, model.Password);

        if (result.Succeeded)
        {
            return Ok(new { result = "User created successfully" });
        }

        return BadRequest(result.Errors);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginModel model)
    {
        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
        {
            var token = GenerateJwtToken(user);
            Console.WriteLine("Generated Token: " + token);
            return Ok(new { token });
        }

        return Unauthorized();
    }

[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
[HttpGet("profile")]
public async Task<IActionResult> GetProfile()
{
    _logger.LogInformation("GetProfile called");

    var userEmail = User.FindFirstValue(ClaimTypes.Email);
    _logger.LogInformation($"User email from token: {userEmail}");

    if (userEmail == null)
    {
        _logger.LogWarning("User email not found in token");
        return Unauthorized("User email not found in token");
    }

    var user = await _userManager.FindByEmailAsync(userEmail);
    if (user == null)
    {
        _logger.LogWarning($"User not found with email: {userEmail}");
        return NotFound();
    }

    _logger.LogInformation($"User profile retrieved for user: {user.Email}");

    return Ok(new
    {
        user.Email,
        user.Id
    });
}
   private string GenerateJwtToken(IdentityUser user)
    {
        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, user.Email),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim(ClaimTypes.Email, user.Email)
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: _configuration["Jwt:Issuer"],
            audience: _configuration["Jwt:Audience"],
            claims: claims,
            expires: DateTime.Now.AddMinutes(30),
            signingCredentials: creds);

        _logger.LogInformation($"Token generated for user: {user.Email}");
        _logger.LogInformation($"Token generated for user ID: {user.Id}");
        
        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
