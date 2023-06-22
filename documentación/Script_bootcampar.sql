-- Create table `categorias`
CREATE TABLE `categorias` (
  `id` bigint AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `create_date` datetime NOT NULL,
  `update_date` datetime NOT NULL
);

-- Create table `cursos`
CREATE TABLE `cursos` (
  `id` bigint AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `titulo` varchar(100) NOT NULL,
  `precio` decimal(10, 2) NOT NULL,
  `descripcion` text NOT NULL,
  `duracion` int NOT NULL,
  `nivel` varchar(50) NOT NULL,
  `lenguajes` varchar(100) NOT NULL,
  `imagenes` varchar(200) NOT NULL
);

-- Create table `ordenes`
CREATE TABLE `ordenes` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `datos` text NOT NULL,
  `estado` varchar(50) NOT NULL,
  `total` decimal(10, 2) NOT NULL,
  `metodos_pago` varchar(50) NOT NULL
);

-- Create table `usuarios`
CREATE TABLE `usuarios` (
  `id` bigint AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `nombre` varchar(50) NOT NULL DEFAULT '',
  `apellido` varchar(50) NOT NULL DEFAULT '',
  `rol` varchar(20) NOT NULL DEFAULT '1',
  `email` varchar(254) NOT NULL DEFAULT '',
  `telefono` varchar(15) NOT NULL DEFAULT '',
  `direccion` varchar(100) NOT NULL DEFAULT '',
  `foto` varchar(200) NOT NULL DEFAULT '',
  `bio` text NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `genero` varchar(20) NOT NULL DEFAULT '',
  `ciudad` varchar(50) NOT NULL DEFAULT '',
  `pais` varchar(50) NOT NULL DEFAULT '',
  `user_id` int NOT NULL,
  CONSTRAINT `usuarios_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
);

-- Create table `orden_detalle`
CREATE TABLE `orden_detalle` (
  `id` bigint AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `precio` decimal(10, 2) NOT NULL,
  `cantidad` int NOT NULL,
  `impuestos` decimal(10, 2) NOT NULL,
  `subtotal` decimal(10, 2) NOT NULL,
  `descuento` int NOT NULL,
  `curso_id` bigint NOT NULL,
  `orden_id` int NOT NULL,
  CONSTRAINT `orden_detalle_curso_id_fk` FOREIGN KEY (`curso_id`) REFERENCES `cursos` (`id`),
  CONSTRAINT `orden_detalle_orden_id_fk` FOREIGN KEY (`orden_id`) REFERENCES `ordenes` (`id`)
);

-- Create table `lecciones`
CREATE TABLE `lecciones` (
  `id` bigint AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `titulo` varchar(100) NOT NULL,
  `contenido` text NOT NULL,
  `duracion` int NOT NULL,
  `tipo` varchar(10) NOT NULL,
  `curso_id` bigint NOT NULL,
  CONSTRAINT `lecciones_curso_id_fk` FOREIGN KEY (`curso_id`) REFERENCES `cursos` (`id`)
);

-- Create table `inscripciones`
CREATE TABLE `inscripciones` (
  `id` bigint AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `curso_id` bigint NOT NULL,
  `usuario_id` bigint NOT NULL,
  CONSTRAINT `inscripciones_curso_id_fk` FOREIGN KEY (`curso_id`) REFERENCES `cursos` (`id`),
  CONSTRAINT `inscripciones_usuario_id_fk` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
);

-- Create table `facturas`
CREATE TABLE `facturas` (
  `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `fecha` datetime NOT NULL,
  `importe_total` decimal(10, 2) NOT NULL,
  `impuestos` decimal(10, 2) NOT NULL,
  `descuentos` decimal(10, 2) NOT NULL,
   `direccion_factura` varchar(100) NOT NULL,
  `moneda` varchar(10) NOT NULL,
  `numero_factura` varchar(50) NOT NULL,
  `precio` decimal(10, 2) NOT NULL,
  `orden_id` int NOT NULL,
  CONSTRAINT `facturas_orden_id_fk` FOREIGN KEY (`orden_id`) REFERENCES `ordenes` (`id`)
);

-- Create table `curso_categoria`
CREATE TABLE `curso_categoria` (
  `id` bigint AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `categoria_id` bigint NOT NULL,
  `curso_id` bigint NOT NULL,
  CONSTRAINT `curso_categoria_categoria_id_fk` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`),
  CONSTRAINT `curso_categoria_curso_id_fk` FOREIGN KEY (`curso_id`) REFERENCES `cursos` (`id`)
);

-- Create table `categorias_cursos` (through table)
CREATE TABLE `categorias_cursos` (
  `id` bigint AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `curso_id` bigint NOT NULL,
  `categoria_id` bigint NOT NULL,
  CONSTRAINT `categorias_cursos_curso_id_fk` FOREIGN KEY (`curso_id`) REFERENCES `cursos` (`id`),
  CONSTRAINT `categorias_cursos_categoria_id_fk` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
);
