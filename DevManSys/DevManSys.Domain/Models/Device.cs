using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DevManSys.Domain.Models
{
    public class Device
    {
        public int DeviceId { get; set; }
        [Required]
        public string Name { get; set; }
        public string Type { get; set; }
        public string Manufacturer { get; set; }
        public string OperatingSystem { get; set; }
        public string OSVersion { get; set; }
        public string Processor { get; set; }
        public int RAMAmount { get; set; }
        public bool IsAvailable { get; set; }

    }
}
