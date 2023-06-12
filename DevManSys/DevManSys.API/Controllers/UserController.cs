using DevManSys.Dal;
using DevManSys.Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DevManSys.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _ctx;

        public UserController(DataContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetListOfUsers()
        {
            List<User> users = await _ctx.Users.ToListAsync();

            if (users == null)
                return NotFound("There is no User available at the moment");

            return Ok(users);
        }

        [HttpGet]
        [Route("{id}")]

        public async Task<ActionResult<User>> GetUserById(int id)
        {
            User user = await _ctx.Users.FirstOrDefaultAsync(d => d.UserId == id);

            if (user == null)
                return NotFound("No resource with the corresponding id found");

            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult<User>> AddUser(User newUser)
        {
            _ctx.Users.Add(newUser);
            await _ctx.SaveChangesAsync();

            return Ok(await _ctx.Users.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<User>> UpdateUser(User updatedUser)
        {
            User toBeUpdated = await _ctx.Users.FirstOrDefaultAsync(d => d.UserId == updatedUser.UserId);

            if (toBeUpdated == null)
                return NotFound("No resource with the corresponding id found.");

            toBeUpdated.Name = updatedUser.Name;
            toBeUpdated.Role = updatedUser.Role;
            toBeUpdated.Location = updatedUser.Location;
            toBeUpdated.Credentials = updatedUser.Credentials;
            toBeUpdated.Device = updatedUser.Device;

            _ctx.Users.Update(toBeUpdated);
            await _ctx.SaveChangesAsync();

            return Ok(toBeUpdated);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            User toDelete = await _ctx.Users.FirstOrDefaultAsync(d => d.UserId == id);

            if (toDelete == null)
                return NotFound("No resource with the corresponding id found");

            _ctx.Users.Remove(toDelete);
            await _ctx.SaveChangesAsync();

            return Ok(await _ctx.Users.ToListAsync());
        }
    }
}
