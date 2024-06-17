CREATE SEQUENCE id_zap
    START WITH 1
    INCREMENT BY 1
    MINVALUE 1
    MAXVALUE 9999;

CREATE SEQUENCE id_user
    START WITH 1
    INCREMENT BY 1
    MINVALUE 1
    MAXVALUE 9999;

CREATE TABLE zapatos(
	id_zapato numeric not null default nextval('id_zap') primary key,
	nombre varchar(255) not null,
	marca varchar(255) not null,
	cantidad numeric not null
	
);

CREATE TABLE users(
    id_user numeric not null primary key  default nextval('id_user'),
    nombre_completo varchar not null,
    cedula numeric,
    passw varchar not null,
    email varchar not null,
    tipo varchar not null,
    constraint checktipo check (tipo In ('admin','cliente'))
);

INSERT INTO zapatos ( nombre, marca, cantidad)
VALUES ( 'Zapatillas deportivas Nike Air Zoom Pegasus 39', 'Nike', 20),
       ( 'Botas de cuero Timberland Premium', 'Timberland', 15),
       ( 'Sandalias casuales Havaianas', 'Havaianas', 30),
       ( 'Zapatos de tacón Steve Madden Carrson', 'Steve Madden', 12),
       ( 'Zapatillas de running Adidas Ultraboost 23', 'Adidas', 8),
       ( 'Botines Chelsea Dr. Martens 1460', 'Dr. Martens', 10),
       ( 'Zapatos Oxford Sperry Authentic Original', 'Sperry', 15);

INSERT INTO users ( nombre_completo, cedula, passw, email, tipo)
VALUES ('Maria Rodriguez', 12345678, 'password123', 'mrodriguez@email.com', 'admin'),
       ( 'Juan Perez', 87654321, 'juanperez2024', 'juanperez@gmail.com', 'cliente'),
       ( 'Ana Lopez', 98765432, 'analopez123', 'analopez@hotmail.com', 'cliente'),
       ( 'Pedro Garcia', 76543210, 'pedrog1234', 'pedrog@yahoo.com', 'cliente'),
       ( 'Sofia Martinez', 65432109, 'sofiamartinez2020', 'sofiamartinez@outlook.com', 'cliente');
