USE [DevManSys]
GO

INSERT INTO dbo.Devices
           (Name
           ,Type
           ,Manufacturer
           ,OperatingSystem
           ,OSVersion
           ,Processor
           ,RAMAmount
           ,IsAvailable)
     VALUES
           ('Samsung Galaxy A04s', 'Phone', 'Samsung', 'Android', '12.0.0', '2 GHz', 3, 'TRUE'),
		   ('Apple MacBook Air', 'Laptop', 'Apple', 'Mac OS', '10.5.8', 'Apple M1 , 8 nuclee CPU si 7 nuclee GPU', 8, 'TRUE'),
		   ('Xiaomi Redmi A1', 'Phone', 'Xiaomi', 'Android', '12.0.0', '2 GHz', 2, 'TRUE'),
		   ('Lenovo IdeaPad 3', 'Laptop', 'Lenovo', 'Windows', '10', 'Intel® Core™ i5-11320H pana la 4.50 GHz', 8, 'TRUE')
		   
GO

INSERT INTO dbo.Credentials 
			(Email
			,Password)
	VALUES
			('dummy1', 'pass1'),
			('dummy2', 'pass2')

GO

INSERT INTO dbo.Users
           (Name
           ,Role
           ,Location
           ,CredentialsId
           ,DeviceId)
     VALUES
           ('John', 'ACS', 'Cluj', 1, 1),
		   ('Noelle', 'QA', 'London', 2, 2)

GO