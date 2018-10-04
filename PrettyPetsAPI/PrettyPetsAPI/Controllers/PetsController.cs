﻿using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using PrettyPetsAPI.Models;
using PrettyPetsAPI.Viewmodels;

namespace PrettyPetsAPI.Controllers
{
    [Route("api/[controller]")]
    public class PetsController : Controller
    {
        private readonly PetDbContext _context;
        private readonly UserManager<AppUser> _userManager;
        private readonly IConfiguration _configuration;

        public PetsController(PetDbContext context, UserManager<AppUser> userManager, IConfiguration configuration)
        {
            _context = context;
            _userManager = userManager;
            _configuration = configuration;
        }

        // GET api/pets
        [HttpGet]
        public IEnumerable<Pet> Get()
        {
            return _context.Pets.Include(p => p.Images).ToList();
        }

        // GET api/pets/5
        [HttpGet("{id}")]
        public async Task<Pet> Get(int id)
        {
            return await _context.Pets.Include(p => p.Images).FirstOrDefaultAsync(p => p.Id == id);
        }

        // GET api/pets/5
        [HttpGet("Mypets")]
        public async Task<List<Pet>> MyPets()
        {
            var currentAppuser = await _userManager.FindByEmailAsync(_userManager.GetUserId(User));
            var currentUser = await _context.PetOwners.Include(u => u.Pets)
                .ThenInclude(p => p.Images)
                .Where(u => u.IdentityId == currentAppuser.Id).SingleOrDefaultAsync();

            return currentUser.Pets;
        }

        // POST api/pets
        [HttpPost]
        public async Task<IActionResult> Post([FromForm] PetPostViewmodel model, IEnumerable<IFormFile> images)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Get calling user
            var currentAppuser = await _userManager.FindByEmailAsync(_userManager.GetUserId(User));
            var currentUser = await _context.PetOwners.Include(u => u.Pets).Where(u => u.IdentityId == currentAppuser.Id).SingleOrDefaultAsync();

            //Create new pet
            var pet = new Pet()
            {

                Name = FirstCharToUpper(model.Name),
                Town = FirstCharToUpper(model.Town),
                Age = model.Age,
                Images = new List<Image>()
            };

            // Add images to pet
            foreach (var image in images)
            {

                var path = Path.Combine(
                    Directory.GetCurrentDirectory(), "wwwroot/PetImages", image.FileName);

                using (var fileStream = new FileStream(path, FileMode.Create))
                {
                    await image.CopyToAsync(fileStream);
                }
                pet.Images.Add(new Image()
                {
                    ImagePath = ((_configuration.GetConnectionString("ImageFolder") + image.FileName))
                });
            }

            // Persist
            currentUser.Pets.Add(pet);
            await _context.SaveChangesAsync();
            return Ok(pet);
        }

        public static string FirstCharToUpper(string input)
        {
            switch (input)
            {
                case null: throw new ArgumentNullException(nameof(input));
                case "": throw new ArgumentException($"{nameof(input)} cannot be empty", nameof(input));
                default: return input.First().ToString().ToUpper() + input.Substring(1);
            }
        }

        // POST api/pets
        [HttpPost("upload")]
        public async Task<IActionResult> Upload([FromForm] int id, IEnumerable<IFormFile> images)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var currentAppuser = await _userManager.FindByEmailAsync(_userManager.GetUserId(User));
            var currentUser = await _context.PetOwners.Include(u => u.Pets).Where(u => u.IdentityId == currentAppuser.Id).SingleOrDefaultAsync();

            var pet = _context.Pets.Include(p => p.Images).FirstOrDefault(p => p.Id == id);

            foreach (var image in images)
            {
                var path = Path.Combine(
                    Directory.GetCurrentDirectory(), "wwwroot/PetImages", image.FileName);

                using (var fileStream = new FileStream(path, FileMode.Create))
                {
                    await image.CopyToAsync(fileStream);
                }

                pet.Images.Add(new Image
                {
                    ImagePath = ((_configuration.GetConnectionString("ImageFolder") + image.FileName))
                });

            }
            await _context.SaveChangesAsync();
            return Ok(pet);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/pets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            // Get asking user
            var currentAppuser = await _userManager.FindByEmailAsync(_userManager.GetUserId(User));
            var currentUser = await _context.PetOwners.Include(u => u.Pets).Where(u => u.IdentityId == currentAppuser.Id).SingleOrDefaultAsync();

            // Get chosen pet
            var pet = await _context.Pets.Include(p => p.Images).FirstOrDefaultAsync(p => p.Id == id);

            //Check user owns pet
            if (!currentUser.Pets.Contains(pet))
                return BadRequest("User doesn't own this pet and therefore cant delete it!");

            _context.Pets.Remove(pet);
            _context.SaveChanges();

            return Ok();
        }
    }
}