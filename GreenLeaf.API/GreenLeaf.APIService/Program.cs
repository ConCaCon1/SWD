using GreenLeaf.Repository;
using GreenLeaf.Repository.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
//


builder.Services.AddDbContext<OcopManagementContext>(options =>
             options.UseSqlServer(connectionString,
                 sqlOptions => sqlOptions.MigrationsAssembly("GreenLeaf.Repository")));

builder.Services.AddCors(option =>
         option.AddPolicy("CORS", builder =>
             builder.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin()));

builder.Services.AddScoped<UnitOfWork>();
builder.Services.AddControllers().AddJsonOptions(options => options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
var app = builder.Build();
app.UseCors("CORS");
// // Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
    // app.UseSwagger();
    // app.UseSwaggerUI();
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<OcopManagementContext>();
    db.Database.Migrate();
}

app.Run();
