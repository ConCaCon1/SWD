﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace GreenLeaf.Repository.Models;

public partial class OcopCompanyCategory
{
    public int CompanyCategoryId { get; set; }

    public string Name { get; set; }

    public virtual ICollection<OcopCompany> OcopCompanies { get; set; } = new List<OcopCompany>();
}