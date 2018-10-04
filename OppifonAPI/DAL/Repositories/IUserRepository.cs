using System;
using System.Collections.Generic;
using System.Text;
using DAL.Models;

namespace DAL.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        User GetByEmail(string email);
    }
}
