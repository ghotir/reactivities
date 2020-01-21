using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {   
        }

        public DbSet<Value> Values { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Value>()
            .HasData(
                new Value {Id = 1, Name = "value101"},
                new Value {Id = 2, Name = "value102"},
                new Value {Id = 3, Name = "value103"},
                new Value {Id = 4, Name = "value104"}
            );
        }
    }
}
