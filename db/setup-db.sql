CREATE TABLE causes (
            causeID serial PRIMARY KEY,
            causeName varchar(255) NOT NULL,
            charityName varchar(255) NOT NULL,
            link varchar(255) NOT NULL
 );

INSERT INTO causes (causeName, charityName, link)
        VALUES
            ('Underprivileged Youth Education', 'Life for Koori Kids',
                'https://www.acnc.gov.au/RN52B75Q?ID=65CA9829-8D44-4A20-A603-56B5A3694963&noleft=1'),
            ('Refugees and Asylum Seekers in Australia', 'St Francis Social Services', 'https://www.acnc.gov.au/RN52B75Q?ID=6738978C-6D1E-4137-90BF-1D87E08DE3BC&noleft=1'),
            ('Child Slavery', 'Connecting Hands Ltd', 'https://www.acnc.gov.au/RN52B75Q?ID=E951FF3D-FAD1-4374-9DE9-44375CF9CAA6&noleft=1'),
            ('Mental Health', 'LGBTI Health Alliance', 'https://www.acnc.gov.au/RN52B75Q?ID=68FE71F6-22C1-4DA9-A932-9E75D41D5DC7&noleft=1'),
            ('Global Poverty', 'Against Malaria Foundation', 'https://www.acnc.gov.au/RN52B75Q?ID=24AA95A2-8109-4020-8974-4730CCD6DF52&noleft=1'),
            ('Youth At Risk', 'Streetwork Incorporated', 'https://www.acnc.gov.au/RN52B75Q?ID=F753AA4B-372F-43A7-BE2A-B44D3AAC0CCF&noleft=1'); 
            
CREATE TABLE donors (
            donorID serial PRIMARY KEY,
            firstName varchar(255) NOT NULL,
            lastName varchar(255) NOT NULL,
            email varchar(255),
            annualDisbursement integer not null,
);

alter table donors
add column disbursement integer not null default 5;

INSERT INTO donors (firstName, lastName, email)
        VALUES
        ('Sabrina','Le Gras','slegras@westpac.com.au'),
        ('Debra','Connelly	','connellyd@westpac.com.au'),
        ('Jackson','Lee','jackson.lee.i4c@gmail.com'),
        ('Simon','Masnick	','smasnick@westpac.com.au'),
        ('Jane','Grainger','jgrainger@westpac.com.au'),
        ('Celine','Sun	','shisun@westpac.com.au'),
        ('Matthew','Fitzpatrick','mattfitzpatrick@westpac.com.au'),
        ('Yitong','Liu','sonia.liu@westpac.com.au'),
        ('Nicholas','Allen','nallen@westpac.com.au'),
        ('Christophe','Denoux','cdenoux@westpac.com.au'),
        ('Craig','Betts','cbetts@westpac.com.au'),
        ('Michael','Lucas','michaellucas@westpac.com.au'),
        ('Daniel','Man','daniel.man.i4c@gmail.com'),
        ('Arwin','Soetanto','arwin.soetanto@gmail.com'),
        ('Geoff','Rousel',''),
        ('David','Paradice',''),
        ('Chris','Cuffe',''),
        ('Geoff','Wilson',''),
        ('Ayowande','McCunn','');
        
INSERT INTO donors (firstName, lastName, email)
VALUES('Westpac',	'GiftMatching', ''),	
('Westpac',	'CEOAwards', '');

CREATE TABLE donorDistribution (
    donorID int NOT NULL,
    causeID int NOT NULL,
    allocation int NOT NULL,
    FOREIGN KEY (donorID) REFERENCES donors (donorID),
    FOREIGN KEY (causeID) REFERENCES causes (causeID)
);

INSERT INTO donorDistribution (donorID, causeID, allocation)
VALUES 
    (1, 1, 50),
    (1, 2, 50),
    (2, 1, 15),
    (2, 2, 25),
    (2, 3, 60),
    (3, 2, 70),
    (3, 4, 30),
    (4, 5, 100);
        
CREATE TABLE donations (
            donationID serial PRIMARY KEY,
            donorID int NOT NULL,
            date DATE,
            amount REAL NOT NULL,
            category varchar(255) NOT NULL
            FOREIGN KEY (donorID) REFERENCES donors (donorID)
 );
 
 INSERT INTO donations (donorID, date, amount, category)
 VALUES
 (1,'2018-02-01', 1000, 'Westpac'),
(2, '2018-01-29', 500, 'Westpac'),
(3, '2018-01-24', 2000, 'Other'),
(4, '2018-01-23', 8889, 'Westpac'),
(5, '2018-01-23',200, 'Westpac'),
(6, '2018-01-23', 250, 'Westpac'),
(7,'2018-01-23',8500, 'Westpac'),
(8, '2018-01-23', 1000, 'Westpac'),
(13,'2018-01-22', 194, 'Other'),
(20,'2017-9-28', 16756, 'Westpac'),
(7,'2017-6-30', 5000, 'Westpac'),
(5, '2017-1-20', 200, 'Westpac'),
(20,'2016-12-19', 33500, 'Westpac'),
(8,'2016-12-13', 667, 'Westpac'),
(4,'2016-12-13', 8889, 'Westpac'),
(9,'2016-12-12', 2000, 'Westpac'),
(7,'2016-06-28', 12000, 'Westpac'),
(10,'2016-06-28', 10000, 'Westpac'),
(4,'2016-06-28', 500, 'Westpac'),
(15,'2016-06-29', 10000, 'Westpac'),
(11,'2016-06-28', 1000, 'Westpac'),
(20,'2016-03-18', 10000, 'Westpac'),
(7,'2015-06-29', 5000, 'Westpac'),
(10,'2015-06-29', 5000, 'Westpac'),
(20,'2015-03-12', 14500, 'Westpac'),
(21,'2015-01-20', 5000, 'Other'),
(12,'2014-12-17', 2000, 'Westpac'),
(7,'2014-11-10', 1000, 'Other'),
(13,'2014-11-10', 4500, 'Other'),
(7,'2014-06-29', 2500, 'Westpac'),
(10,'2014-06-26', 10000, 'Westpac'),
(14,'2014-02-02', 5000, 'Other'),
(13,'2011-12-08', 2500, 'Other'),
(16,'2011-04-13', 15000, 'Seed Funders'),
(17,'2011-04-13', 15000, 'Seed Funders'),
(18,'2011-04-13', 15000, 'Seed Funders'),
(19,'2010-12-08', 10, 'Other'),
(7,'2010-12-08', 100, 'Other'),
(14,'2010-12-20', 110, 'Other');

CREATE TABLE charityImpact (
    charityImpactId serial PRIMARY KEY,
    causeID int not null,
    amount int not null,
    unit varchar(255) not null,
    FOREIGN KEY (causeId) REFERENCES causes (causeId)
);

CREATE MATERIALIZED VIEW donorDonation
AS SELECT (donorID, firstName, lastName, email, amount);

CREATE TABLE EOFY (
    donorID int not null,
    date DATE not null,
    amount real not null,
    FOREIGN KEY (donorID) REFERENCES donors (donorID)
);

INSERT INTO EOFY (donorID, date, amount)
VALUES 
    (1, '2018-10-10', 1200),
    (2, '2018-10-10', 600),
    (3, '2018-10-10', 2400),
    (4, '2018-10-10', 24000),
    (5, '2018-10-10', 420),
    (6, '2018-10-10', 300),
    (7, '2018-10-10', 50000);

SELECT 
    donors.donorID, donors.email,
    SUM(donations.amount) as submissionAmount,
    SUM(EOFY.amount) as eofyAmount,
    MIN(EOFY.date) as date, 
    MIN(donors.disbursement) as disb,
    dd.causeID,
    MIN(causes.charityName) as charityName,
    SUM(dd.allocation) as allocation,
    SUM(dd.allocation) * SUM(EOFY.amount) / 100 as donatedAmount
FROM donors
JOIN donations ON donors.donorID = donations.donorID
JOIN EOFY ON EOFY.donorID = donors.donorID
JOIN donorDistribution as dd ON dd.donorID = donors.donorID
JOIN causes ON causes.causeID = dd.causeID
JOIN (
    SELECT 
)
WHERE EOFY.date = '2018-10-10'
GROUP BY donors.donorID, dd.causeID
ORDER BY donors.donorID, dd.causeID;

SELECT *
FROM donorDistribution as dd
JOIN donors ON donors.donorID = dd.donorID;

SELECT donors.donorID, donors.disbursement * amount / 100 as donationPerYear
FROM donors
JOIN EOFY ON EOFY.donorID = donors.donorID;

SELECT dd.donorID, causeID, allocation, donorDonationYear.donationPerYear
FROM donorDistribution as dd
LEFT JOIN (
    SELECT donors.donorID, donors.disbursement * amount / 100 as donationPerYear, EOFY.date
    FROM donors
    JOIN EOFY ON EOFY.donorID = donors.donorID
) donorDonationYear ON donorDonationYear.donorID = dd.donorID;
