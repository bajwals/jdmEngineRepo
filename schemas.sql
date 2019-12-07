CREATE TABLE inventory (
	id INT NOT NULL AUTO_INCREMENT,
    manufacturer VARCHAR(30) NOT NULL,
    engine_code VARCHAR(30) NOT NULL,
    displacement_in_cm3 INT NOT NULL,
    engine_configuration VARCHAR(30) NOT NULL,
    number_of_cylinders INT NOT NULL,
    aspiration VARCHAR(50),
    maximum_power INT NULL,
    price INT NULL,
    in_stock INT NULL,
    PRIMARY KEY (id)
);
