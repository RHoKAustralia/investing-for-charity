CREATE TABLE donors (
	donorID serial PRIMARY KEY,
	firstName varchar(255) NOT NULL,
	lastName varchar(255) NOT NULL,
	email varchar(255),
	disbursement integer not null,
);

INSERT INTO donors (firstName, lastName, email, disbursement)
VALUES 
	('Matthew', 'Fitzpatrick', 'matthew.fitzpatrick.i4c@gmail.com', 5),
	('Daniel', 'Man', 'daniel.man.i4c@gmail.com', 5),
	('Rebecca', 'Ching', 'rebecca.ching.i4c@gmail.com', 5),
	('Jackson', 'Lee', 'jackson.lee.i4c@gmail.com', 5);
