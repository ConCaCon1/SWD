﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace GreenLeaf.Repository.Models;

public partial class ShippingHistory
{
    public int ShippingHistoryId { get; set; }

    public DateTime? CreateDate { get; set; }

    public bool ShippingStatus { get; set; }

    public string ShippingCompany { get; set; }

    public DateTime? UpdateDate { get; set; }

    public DateTime? StartTime { get; set; }

    public DateTime? EndTime { get; set; }

    public int? UserId { get; set; }

    public int? OrderId { get; set; }

    public virtual User User { get; set; }
}