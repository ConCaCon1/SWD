﻿using GreenLeaf.Repository.Base;
using GreenLeaf.Repository.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GreenLeaf.Repository.Repositories
{
    public class ProductRepository : GenericRepository<Product>
    {
        public ProductRepository( OcopManagementContext context) => _context = context;
              
             
      

    }
}
