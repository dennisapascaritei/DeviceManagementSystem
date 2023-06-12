using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DevManSys.Domain.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Role { get; set; }
        public string Location { get; set; }
        public int CredentialsId { get; set; }
        public Credentials Credentials { get; set; }
        public int DeviceId { get; set; }
        public Device Device { get; set; }
    }
}
