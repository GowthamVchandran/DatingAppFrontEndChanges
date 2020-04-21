using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]   
    public class HomeController : ControllerBase
    {
       private readonly DataContext _context;
        public HomeController(DataContext context){
            _context=context;

        }
        
        [HttpGet] 
       [Route("Get")]
            public  async Task<IActionResult> Get()
            {
                var result = await _context.Users.ToListAsync();       
                
                return Ok(result);
            }

        [HttpGet]  
        [Route("GetEach")]             
        public async Task<IActionResult> Get(int id)
        {
              var getDetails= await _context.Users.FirstOrDefaultAsync(x=>x.Id==id);

              if(getDetails == null)
               return BadRequest("Record doesn't exists");

              return Ok(getDetails);
               
        }   
    }
}