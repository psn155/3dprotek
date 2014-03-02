using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;

namespace _3DProTek.Models
{
    public class BaseModel : IIdModel
    {
        #region IIdModel Members

        [Key]
        public int Id { get; set; }

        #endregion

        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }        
    }
}
