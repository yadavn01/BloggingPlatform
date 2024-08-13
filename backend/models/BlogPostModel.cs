using System;
using System.ComponentModel.DataAnnotations;

public class BlogPost 
{
    public int? Id { get; set;}
    public string? Title { get; set;}
    public string? Content { get; set;}
    public string? AuthorId { get; set;}
    public DateTime? CreatedAt { get; set;}
    public int? ViewCount  { get; set;}
}