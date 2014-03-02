namespace _3DProTek.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using _3DProTek.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<_3DProTek.Models.ProTekDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(_3DProTek.Models.ProTekDb context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            var models = new List<Model>()
            {
                new Model(){
                    Id = 1,
                    Name = "Military Tank",
                    Description = "An amazing 3D model of a military tank",
                    FileName = "tank.png",
                    IsActive = true,
                    CreatedDate = DateTime.Today                    
                },
                new Model(){
                    Id = 2,
                    Name = "Tyrannosaurus",
                    Description = "A 3D model of one of the dinasours",
                    FileName = "dinasour.png",
                    IsActive = true,
                    CreatedDate = DateTime.Today                    
                },
                new Model(){
                    Id = 3,
                    Name = "Lion",
                    Description = "A 3D model of a lion and a ball",
                    FileName = "lion.png",
                    IsActive = true,
                    CreatedDate = DateTime.Today                    
                },
                new Model(){
                    Id = 4,
                    Name = "Boeing CH-47 Helicopter",
                    Description = "An amazing 3D model of a Boeing CH-47 Chinook Helicopter",
                    FileName = "helicopter.png",
                    IsActive = true,
                    CreatedDate = DateTime.Today                    
                },
                new Model(){
                    Id = 5,
                    Name = "Skull",
                    Description = "A scary 3D model of a skull",
                    FileName = "skull.png",
                    IsActive = true,
                    CreatedDate = DateTime.Today                    
                },
                new Model(){
                    Id = 6,
                    Name = "Couple",
                    Description = "An amzaing 3D model of a kissing couple",
                    FileName = "couple.png",
                    IsActive = true,
                    CreatedDate = DateTime.Today                    
                }
            };

            foreach (var model in models)
            {
                context.Models.AddOrUpdate(model);
            }
        }
    }
}
