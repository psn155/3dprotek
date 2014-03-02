using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace _3DProTek.Models
{
    public class ProTekDb : DbContext
    {
        public ProTekDb()
            : base("name=DefaultConnection")
        {
        }

        public DbSet<Model> Models { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            // Use singular table names
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            // Turn off ON DELETE CASCADE globally
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();

            // Add ASP.NET WebPages Simple Membership User table
            //modelBuilder.Configurations.Add(new UserConfiguration());

            base.OnModelCreating(modelBuilder);
        }
    }
}