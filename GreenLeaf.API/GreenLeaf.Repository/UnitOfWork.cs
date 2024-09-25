using GreenLeaf.Repository.Models;
using GreenLeaf.Repository.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GreenLeaf.Repository
{
    public class UnitOfWork
    {

        private OcopManagementContext _context;
        private ProductRepository _productRepository;

        public UnitOfWork() => _context ??= new OcopManagementContext();

        //public UnitOfWork(OcopManagementContext context) => _context = context; 

        public ProductRepository ProductRepository
        {
            get { return _productRepository ??= new ProductRepository(_context); }
        }
    }
}
