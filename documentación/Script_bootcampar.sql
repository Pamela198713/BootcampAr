CREATE DATABASE bootcampar;
USE bootcampar;

CREATE TABLE Usuario (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    Pais VARCHAR(50),
    Email VARCHAR(100) UNIQUE,
    Contraseña VARCHAR(100),
    Rol VARCHAR(20),
    Telefono VARCHAR(15),
    Direccion VARCHAR(100),
    Foto VARCHAR(255),
    Perfil VARCHAR(255)
);

CREATE TABLE Categoria (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50),
    Descripcion VARCHAR(255),
    Imagen VARCHAR(255),
    CreateDate DATETIME,
    UpdateDate DATETIME
);

CREATE TABLE Curso (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(100),
    Precio DECIMAL(10, 2),
    Descripcion TEXT,
    Duracion INT,
    Nivel VARCHAR(50).
    Lenguajes VARCHAR(100),
    Imagenes VARCHAR(255)
);

CREATE TABLE CursoCategoria (
    ID_Curso INT,
    ID_Categoria INT,
    PRIMARY KEY (ID_Curso, ID_Categoria),
    FOREIGN KEY (ID_Curso) REFERENCES Curso(ID),
    FOREIGN KEY (ID_Categoria) REFERENCES Categoria(ID)
);

CREATE TABLE Inscripcion (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_Usuario INT,
    ID_Curso INT,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuario(ID),
    FOREIGN KEY (ID_Curso) REFERENCES Curso(ID)
);

CREATE TABLE Leccion (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(100),
    Contenido TEXT,
    Duracion INT,
    ID_Curso INT,
    Tipo INT,
    FOREIGN KEY (ID_Curso) REFERENCES Curso(ID)
);

CREATE TABLE Orden (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_Usuario INT,
    Datos TEXT,
    Estado VARCHAR(50),
    MetodosPago VARCHAR(50),
    FOREIGN KEY (ID_Usuario) REFERENCES Usuario(ID)
);

CREATE TABLE OrdenDetalle (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Precio DECIMAL(10, 2),
    Cantidad INT,
    Impuestos DECIMAL(10, 2),
    Subtotal DECIMAL(10, 2),
    Descuento INT,
    ID_Orden INT,
    ID_Curso INT,
    FOREIGN KEY (ID_Orden) REFERENCES Orden(ID),
    FOREIGN KEY (ID_Curso) REFERENCES Curso(ID)
);

CREATE TABLE Factura (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Fecha DATETIME,
    Importe_Total DECIMAL(10, 2),
    Impuestos DECIMAL(10, 2),
    Descuentos DECIMAL(10, 2),
    Direccion_Factura VARCHAR(100),
    Moneda VARCHAR(10),
    Numero_Factura VARCHAR(50),
    Precio DECIMAL(10, 2),
    ID_Orden INT,
    FOREIGN KEY (ID_Orden) REFERENCES Orden(ID)
);