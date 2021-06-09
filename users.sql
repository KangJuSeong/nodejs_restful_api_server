use loginAPI;

CREATE TABLE users(
	id varchar(30) NOT NULL,
    name varchar(30) NOT NULL,
    psword varchar(30) NOT NULL,
	in_date datetime DEFAULT current_timestamp,
    email varchar(30) NOT NULL,
    
    PRIMARY KEY(id)
);

show tables;
desc users;

INSERT INTO users(id, name, email, psword) 
	values("test", "test", "test@gamil.com", "test"),
    ("test2", "test2", "test2@naver.com", "test");

SELECT * FROM users; 
