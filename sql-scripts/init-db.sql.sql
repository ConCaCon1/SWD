
CREATE DATABASE OcopManagement;
USE OcopManagement;
CREATE TABLE [ProductCategory] (
  [CategoryId] int IDENTITY(1,1) NOT NULL,
  [Name] nvarchar(255) NOT NULL,
  PRIMARY KEY ([CategoryId])
);

CREATE TABLE [OcopCompanyCategory] (
  [CompanyCategoryId] int IDENTITY(1,1) NOT NULL,
  [Name] nvarchar(255) NOT NULL,
  PRIMARY KEY ([CompanyCategoryId])
);

CREATE TABLE [OcopCompany] (
  [CompanyId] int IDENTITY(1,1) NOT NULL,
  [CompanyName] nvarchar(255) NOT NULL,
  [Description] nvarchar(255),
  [Address] nvarchar(255) NOT NULL,
  [CreateDate] datetime ,
  [UpdateDate] datetime ,
  [CertificationImage] nvarchar(255) NOT NULL,
  [Email] nvarchar(255) NOT NULL,
  [Phone] nvarchar(255) NOT NULL,
  [UserId] int,
  [CompanyCategoryId] int,
  PRIMARY KEY ([CompanyId]),
  CONSTRAINT [FK_OcopCompany.CompanyCategoryId]
    FOREIGN KEY ([CompanyCategoryId])
      REFERENCES [OcopCompanyCategory]([CompanyCategoryId])
);

CREATE TABLE [Users] (
  [UserId] int IDENTITY(1,1) NOT NULL,
  [Username] nvarchar(255) NOT NULL,
  [Password] nvarchar(255) NOT NULL,
  [FirstName] nvarchar(255) NOT NULL,
  [LastName] nvarchar(255) NOT NULL,
  [Email] nvarchar(255) NOT NULL,
  [Phone] nvarchar(255) NOT NULL,
  [ProfileImage] nvarchar(255) NOT NULL,
  [CreateDate] datetime,
  [UpdateDate] datetime,
  [Status] bit NOT NULL,
  PRIMARY KEY ([UserId])
);

CREATE TABLE [Order] (
  [OrderId] int IDENTITY(1,1) NOT NULL,
  [CreateDate] datetime,
  [TotalPrice] DECIMAL(10, 2) NOT NULL,
  [Status] bit,
  [UserId] int,
  [UpdateDate] datetime,
  [CompanyId] int,
  PRIMARY KEY ([OrderId]),
  CONSTRAINT [FK_Order.CompanyId]
    FOREIGN KEY ([CompanyId])
      REFERENCES [OcopCompany]([CompanyId]),
  CONSTRAINT [FK_Order.UserId]
    FOREIGN KEY ([UserId])
      REFERENCES [Users]([UserId])
);

CREATE TABLE [Product] (
  [ProductId] int IDENTITY(1,1) NOT NULL,
  [Name] nvarchar(255) NOT NULL,
  [Description] nvarchar(255),
  [CreateDate] datetime,
  [UpdateDate] datetime,
  [Image_url] nvarchar(255) NOT NULL,
  [Price] DECIMAL(10, 2) NOT NULL,
  [Quantity] int NOT NULL,
  [CategoryId] int,
  PRIMARY KEY ([ProductId]),
  CONSTRAINT [FK_Product.CategoryId]
    FOREIGN KEY ([CategoryId])
      REFERENCES [ProductCategory]([CategoryId])
);

CREATE TABLE [Warehouse] (
  [WarehouseId] int IDENTITY(1,1) NOT NULL,
  [Quantity] int NOT NULL,
  [Status] bit,
  [CreateDate] datetime,
  [UpdateDate] datetime,
  [Price] DECIMAL(10, 2),
  [ProductId] int,
  [CompanyId] int,
  PRIMARY KEY ([WarehouseId]),
  CONSTRAINT [FK_Warehouse.CompanyId]
    FOREIGN KEY ([CompanyId])
      REFERENCES [OcopCompany]([CompanyId]),
  CONSTRAINT [FK_Warehouse.ProductId]
    FOREIGN KEY ([ProductId])
      REFERENCES [Product]([ProductId])
);

CREATE TABLE [OrderDetail] (
  [OrderDetailId] int IDENTITY(1,1) NOT NULL,
  [Price] DECIMAL(10, 2) NOT NULL,
  [Quantity] int  NOT NULL,
  [CreateDate] datetime,
  [TotalPrice] DECIMAL(10, 2)  NOT NULL,
  [OrderId] int,
  [WarehouseId] int,
  [ProductId] int,
  PRIMARY KEY ([OrderDetailId]),
  CONSTRAINT [FK_OrderDetail.ProductId]
    FOREIGN KEY ([ProductId])
      REFERENCES [Product]([ProductId]),
  CONSTRAINT [FK_OrderDetail.OrderId]
    FOREIGN KEY ([OrderId])
      REFERENCES [Order]([OrderId]),
  CONSTRAINT [FK_OrderDetail.WarehouseId]
    FOREIGN KEY ([WarehouseId])
      REFERENCES [Warehouse]([WarehouseId])
);

CREATE TABLE [Roles] (
  [RoleId] int IDENTITY(1,1) NOT NULL,
  [Name] nvarchar(255) NOT NULL,
  PRIMARY KEY ([RoleId])
);

CREATE TABLE [Payment] (
  [PaymentId] int IDENTITY(1,1) NOT NULL,
  [CreateDate] datetime,
  [TotalPrice] DECIMAL(10, 2)  NOT NULL,
  [Status] bit NOT NULL,
  [UserId] int,
  [OrderId] int,
  PRIMARY KEY ([PaymentId]),
  CONSTRAINT [FK_Payment.UserId]
    FOREIGN KEY ([UserId])
      REFERENCES [Users]([UserId]),
  CONSTRAINT [FK_Payment.OrderId]
    FOREIGN KEY ([OrderId])
      REFERENCES [Order]([OrderId])
);

CREATE TABLE [UserRoles] (
  [UserId] int NOT NULL,
  [RoleId] int NOT NULL,
  CONSTRAINT PK_UserRoles PRIMARY KEY (UserId, RoleId),
  CONSTRAINT [FK_UserRoles.UserId]
    FOREIGN KEY ([UserId])
      REFERENCES [Users]([UserId]),
  CONSTRAINT [FK_UserRoles.RoleId]
    FOREIGN KEY ([RoleId])
      REFERENCES [Roles]([RoleId])
);

CREATE TABLE [ProductExchange] (
  [ExchangeId] int IDENTITY(1,1) NOT NULL,
  [Date] datetime,
  [UserId] int,
  [WarehouseId] int,
  [CompanyId] int,
  PRIMARY KEY ([ExchangeId]),
  CONSTRAINT [FK_ProductExchange.UserId]
    FOREIGN KEY ([UserId])
      REFERENCES [Users]([UserId]),
  CONSTRAINT [FK_ProductExchange.WarehouseId]
    FOREIGN KEY ([WarehouseId])
      REFERENCES [Warehouse]([WarehouseId]),
  CONSTRAINT [FK_ProductExchange.CompanyId]
    FOREIGN KEY ([CompanyId])
      REFERENCES [OcopCompany]([CompanyId])
);

CREATE TABLE [ProductExchangeDetail] (
  [ExchangeDetailId] int IDENTITY(1,1)  NOT NULL,
  [Price] DECIMAL(10, 2)  NOT NULL,
  [Quantity] int  NOT NULL,
  [Note] nvarchar(255),
  [ExchangeId] int,
  [ProductId] int,
  PRIMARY KEY ([ExchangeDetailId]),
  CONSTRAINT [FK_ProductExchangeDetail.ProductId]
    FOREIGN KEY ([ProductId])
      REFERENCES [Product]([ProductId]),
  CONSTRAINT [FK_ProductExchangeDetail.ExchangeId]
    FOREIGN KEY ([ExchangeId])
      REFERENCES [ProductExchange]([ExchangeId])
);

CREATE TABLE [Feedback] (
  [FeedbackId] int IDENTITY(1,1)  NOT NULL,
  [Content] nvarchar(255),
  [AttachedFile] nvarchar(255)  NOT NULL,
  [CreatedDate] datetime,
  [UpdatedDate] datetime,
  [Status] bit  NOT NULL,
  [Rate] DECIMAL(5, 2) NOT NULL,
  [UserId] int,
  [ProductId] int,
  PRIMARY KEY ([FeedbackId]),
  CONSTRAINT [FK_Feedback.ProductId]
    FOREIGN KEY ([ProductId])
      REFERENCES [Product]([ProductId]),
  CONSTRAINT [FK_Feedback.UserId]
    FOREIGN KEY ([UserId])
      REFERENCES [Users]([UserId])
);

CREATE TABLE [ShippingHistory] (
  [ShippingHistoryId] int IDENTITY(1,1)  NOT NULL,
  [CreateDate] datetime,
  [ShippingStatus] bit NOT NULL,
  [ShippingCompany]  nvarchar(255) NOT NULL ,
  [UpdateDate] datetime,
  [StartTime] datetime,
  [EndTime] datetime,
  [UserId] int,
  [OrderId] int,
  PRIMARY KEY ([ShippingHistoryId]),
  CONSTRAINT [FK_ShippingHistory.UserId]
    FOREIGN KEY ([UserId])
      REFERENCES [Users]([UserId])
);

INSERT INTO [Roles] ([Name]) VALUES
('Admin'),
('User'),
('Business');
INSERT INTO [OcopCompanyCategory] ([Name]) VALUES 
(N'Thực phẩm'), 
(N'Đồ uống'), 
(N'Dược liệu'), 
(N'Đồ thủ công');
INSERT INTO [ProductCategory] ([Name]) VALUES 
(N'Bia'),
(N'Rượu'),
(N'Cà phê'),
(N'Ca cao'),
(N'Gia vị'),
(N'Nước giải khát'),
(N'Thực phẩm chế biến'),
(N'Thực phẩm sơ chế'),
(N'Thực phẩm tươi sống'),
(N'Tinh Dầu'),
(N'Thủ công mỹ nghệ'),
(N'Thực phẩm chức năng'),
(N'Dược liệu'),
(N'Trà');

INSERT INTO [Product] ([Name], [Description], [CreateDate], [UpdateDate], [Image_url], [Price], [Quantity], [CategoryId])
VALUES 
(N'Trà mãng cầu', N'Trà mãng cầu Bình Phước',  GETDATE(),  GETDATE(), 'http://example.com/image1.jpg', 19.99, 100, 14),
(N'Rượu dừa', N'Rượu dừa Bến Tre',  GETDATE(),  GETDATE(), 'http://example.com/image1.jpg', 19.99, 100, 2),
(N'Cá khô', N'Cá khô Trà Vinh',  GETDATE(),  GETDATE(), 'http://example.com/image1.jpg', 19.99, 100, 8)

