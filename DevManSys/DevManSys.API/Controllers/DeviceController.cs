using DevManSys.Dal;
using DevManSys.Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

namespace DevManSys.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeviceController : ControllerBase
    {
        private readonly DataContext _ctx;

        public DeviceController(DataContext ctx)
        {
            _ctx = ctx;
        }


        [HttpGet]
        public async Task<ActionResult<List<Device>>> GetListOfDevices()
        {
            List<Device> devices = await _ctx.Devices.ToListAsync();

            if (devices == null)
                return NotFound("There is no device available at the moment");

            return Ok(devices);
        }

        [HttpGet]
        [Route("{id}")]

        public async Task<ActionResult<Device>> GetDeviceById(int id)
        {
            Device device = await _ctx.Devices.FirstOrDefaultAsync(d => d.DeviceId == id);

            if (device == null)
                return NotFound("No resource with the corresponding id found");

            return Ok(device);
        }

        [HttpPost]
        public async Task<ActionResult<Device>> AddDevice(Device newDevice)
        {
           _ctx.Devices.Add(newDevice);
           await _ctx.SaveChangesAsync();

           return Ok(await _ctx.Devices.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<Device>> UpdateDevice(Device updatedDevice)
        {
            Device toBeUpdated = await _ctx.Devices.FirstOrDefaultAsync( d => d.DeviceId == updatedDevice.DeviceId);

            if (toBeUpdated == null)
                return NotFound("No resource with the corresponding id found.");

            toBeUpdated.Name = updatedDevice.Name;
            toBeUpdated.Type = updatedDevice.Type;
            toBeUpdated.Manufacturer = updatedDevice.Manufacturer;
            toBeUpdated.OperatingSystem = updatedDevice.OperatingSystem;
            toBeUpdated.OSVersion = updatedDevice.OSVersion;
            toBeUpdated.Processor = updatedDevice.Processor;
            toBeUpdated.RAMAmount = updatedDevice.RAMAmount;
            toBeUpdated.IsAvailable = updatedDevice.IsAvailable;

           

            _ctx.Devices.Update(toBeUpdated);
            await _ctx.SaveChangesAsync();

            return Ok(toBeUpdated);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult> DeleteDevice(int id)
        {
            Device toDelete = await _ctx.Devices.FirstOrDefaultAsync(d => d.DeviceId == id);

            if (toDelete == null)
                return NotFound("No resource with the corresponding id found");

            _ctx.Devices.Remove(toDelete);
            await _ctx.SaveChangesAsync();

            return Ok(await _ctx.Devices.ToListAsync());
        }



    }
}
