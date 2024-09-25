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
    public class ProductRepository : GenericRepository<ProductCategory>
    {
        public ProductRepository( OcopManagementContext context) => _context = context;


        public async Task<List<Product>> GetAllAsync()
        {
            return await _context.Products.Include(p => p.Category).ToListAsync();
        }

        public async Task<Product> GetByIdAsync(int id)
        {
            var result = await _context.Products.Include(p => p.Category).FirstAsync(p => p.ProductId == id);

            return result;
        }

    }
}
