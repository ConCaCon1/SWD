﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace GreenLeaf.Repository.Models;

public partial class OrderDetail
{
    public int OrderDetailId { get; set; }

    public decimal Price { get; set; }

    public int Quantity { get; set; }

    public DateTime? CreateDate { get; set; }

    public DateTime? UpdateDate { get; set; }

    public decimal TotalPrice { get; set; }

    public int OrderId { get; set; }

    public int ProductId { get; set; }

    public virtual Order Order { get; set; }

    public virtual Product Product { get; set; }
}