USE users;
create table users (
	ID INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
    password VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
    type VARCHAR(255) CHARACTER SET 'utf8mb4' NOT NULL,
    active TINYINT DEFAULT 1,
    PRIMARY KEY (ID)
);

DELIMITER $$ ;
CREATE DEFINER=`root`@`localhost` PROCEDURE `addUser`(IN email varchar(255), IN user_password varchar(255), IN user_type varchar(255))
BEGIN
	insert into users(email,password,type) values (email,user_password,user_type);
END 
DELIMITER ;
CALL addUser('test1@gmail.com', 'test123', 'type2');