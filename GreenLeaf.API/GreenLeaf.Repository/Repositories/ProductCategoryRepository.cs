using GreenLeaf.Repository.Base;
using GreenLeaf.Repository.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GreenLeaf.Repository.Repositories
{
    public class ProductCategoryRepository : GenericRepository<ProductCategory>
    {
        public ProductCategoryRepository(OcopManagementContext context) => _context = context;

    }
}
