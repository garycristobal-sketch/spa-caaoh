-- Ejecuta esto en phpMyAdmin (pestaña SQL), dentro de tu base de datos "gcristobal",
-- antes de probar el formulario de contacto.

CREATE TABLE IF NOT EXISTS info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dni VARCHAR(15) NOT NULL,
    nombres VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    celular VARCHAR(15) NOT NULL,
    fecha DATETIME NOT NULL
);
