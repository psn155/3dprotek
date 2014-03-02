using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace _3DProTek.Models
{
    public class Model : BaseModel
    {      
        [Required]
        [StringLength(30)]
        public string Name { get; set; }
        public string Description { get; set; }

        [Required]
        public string FileName { get; set; }

        [Required]
        public bool IsActive { get; set; }        
    }
}