-- =====================================================
-- Proyecto Final - Sistema de Gestión de Biblioteca
-- Script de creación de tablas e inserción de registros
-- =====================================================

CREATE DATABASE IF NOT EXISTS biblioteca;
USE biblioteca;

-- =====================================================
-- CREACIÓN DE TABLAS
-- =====================================================

CREATE TABLE autores (
    id_autor INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    nacionalidad VARCHAR(50)
);

CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE libros (
    id_libro INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    anio INT,
    autor_id INT NOT NULL,
    categoria_id INT NOT NULL,
    FOREIGN KEY (autor_id) REFERENCES autores(id_autor),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id_categoria)
);

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100)
);

CREATE TABLE prestamos (
    id_prestamo INT AUTO_INCREMENT PRIMARY KEY,
    libro_id INT NOT NULL,
    usuario_id INT NOT NULL,
    fecha_prestamo DATE NOT NULL,
    fecha_devolucion DATE,
    FOREIGN KEY (libro_id) REFERENCES libros(id_libro),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id_usuario)
);

-- =====================================================
-- INSERCIÓN DE REGISTROS
-- =====================================================

-- Autores
INSERT INTO autores (nombre, nacionalidad) VALUES
('Guadalupe Nettel', 'Mexicana'),
('Uriel Reyes', 'Mexicano'),
('Paula Bombara', 'Argentina'),
('Patti Smith', 'Estadounidense'),
('Rosa Montero', 'Española'),
('Franz Kafka', 'Checo');

-- Categorías
INSERT INTO categorias (nombre) VALUES
('Novela'),
('Terror'),
('Novela juvenil'),
('Autobiografía'),
('Ensayo'),
('Clásico');

-- Libros
INSERT INTO libros (titulo, anio, autor_id, categoria_id) VALUES
('Las manzanas', 2022, 1, 1),
('Relatos de la noche', 2020, 2, 2),
('La chica pájaro', 2015, 3, 3),
('Just Kids', 2010, 4, 4),
('Historias de mujeres', 1995, 5, 5),
('La metamorfosis', 1915, 6, 6),
('El nombre del viento', 2007, 1, 1);
-- Usuarios
INSERT INTO usuarios (nombre, email) VALUES
('Yaya', 'yaya@email.com'),
('Becca', 'becca@email.com'),
('Gaby', 'gaby@email.com'),
('Xime', 'xime@email.com'),
('Diana', 'diana@email.com'),
('Miguel', 'miguel@email.com');

-- Préstamos
INSERT INTO prestamos (libro_id, usuario_id, fecha_prestamo, fecha_devolucion) VALUES
(1, 1, '2026-06-01', '2026-06-15'),
(2, 2, '2026-06-05', NULL),
(3, 3, '2026-06-10', '2026-06-20'),
(4, 4, '2026-07-01', NULL),
(5, 5, '2026-07-05', '2026-07-12'),
(6, 6, '2026-07-15', NULL);