CREATE DATABASE DevManSys;

IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230612195313_Initial')
BEGIN
    CREATE TABLE [Credentials] (
        [CredentialsId] int NOT NULL IDENTITY,
        [Email] nvarchar(max) NOT NULL,
        [Password] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_Credentials] PRIMARY KEY ([CredentialsId])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230612195313_Initial')
BEGIN
    CREATE TABLE [Devices] (
        [DeviceId] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NOT NULL,
        [Type] nvarchar(max) NOT NULL,
        [Manufacturer] nvarchar(max) NOT NULL,
        [OperatingSystem] nvarchar(max) NOT NULL,
        [OSVersion] nvarchar(max) NOT NULL,
        [Processor] nvarchar(max) NOT NULL,
        [RAMAmount] int NOT NULL,
        [IsAvailable] bit NOT NULL,
        CONSTRAINT [PK_Devices] PRIMARY KEY ([DeviceId])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230612195313_Initial')
BEGIN
    CREATE TABLE [Users] (
        [UserId] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NOT NULL,
        [Role] nvarchar(max) NOT NULL,
        [Location] nvarchar(max) NOT NULL,
        [CredentialsId] int NOT NULL,
        [DeviceId] int NOT NULL,
        CONSTRAINT [PK_Users] PRIMARY KEY ([UserId]),
        CONSTRAINT [FK_Users_Credentials_CredentialsId] FOREIGN KEY ([CredentialsId]) REFERENCES [Credentials] ([CredentialsId]) ON DELETE CASCADE,
        CONSTRAINT [FK_Users_Devices_DeviceId] FOREIGN KEY ([DeviceId]) REFERENCES [Devices] ([DeviceId]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230612195313_Initial')
BEGIN
    CREATE INDEX [IX_Users_CredentialsId] ON [Users] ([CredentialsId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230612195313_Initial')
BEGIN
    CREATE INDEX [IX_Users_DeviceId] ON [Users] ([DeviceId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230612195313_Initial')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20230612195313_Initial', N'7.0.5');
END;
GO

COMMIT;
GO

