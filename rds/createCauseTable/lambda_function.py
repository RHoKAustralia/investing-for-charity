import json
import sys
import logging
import rds_config
import psycopg2

# rds settings
rds_host = "investingforcharity.cptpg6trvqxe.ap-southeast-2.rds.amazonaws.com"
name = rds_config.db_username
password = rds_config.db_password
db_name = rds_config.db_name

logger = logging.getLogger()
logger.setLevel(logging.INFO)

try:
    conn = psycopg2.connect(host=rds_host, user=name,
                           password=password, dbname=db_name, port=5432)
except:
    logger.error(
        "ERROR: Unexpected error: Could not connect to MySql instance.")
    sys.exit()

logger.info("SUCCESS: Connection to RDS mysql instance succeeded")


def createAndPopulateCause():
    with conn.cursor() as cur:
        cur.execute("""
		CREATE TABLE cause (
			causeID int NOT NULL,
			causeName varchar(255) NOT NULL,
			charityName varchar(255) NOT NULL,
			link varchar(255) NOT NULL,
			PRIMARY KEY (causeID)
		);""")

        cur.execute("""
		INSERT INTO cause (causeId, causeName, charityName, link)
		VALUES
			(1, 'Underprivileged Youth Education', 'Life for Koori Kids',
				'https://www.acnc.gov.au/RN52B75Q?ID=65CA9829-8D44-4A20-A603-56B5A3694963&noleft=1'),
			(2, 'Refugees and Asylum Seekers in Australia', 'St Francis Social Services', https://www.acnc.gov.au/RN52B75Q?ID=6738978C-6D1E-4137-90BF-1D87E08DE3BC&noleft=1),
			(3, 'Child Slavery', 'Connecting Hands Ltd', https://www.acnc.gov.au/RN52B75Q?ID=E951FF3D-FAD1-4374-9DE9-44375CF9CAA6&noleft=1),
			(4, 'Mental Health', 'LGBTI Health Alliance', https://www.acnc.gov.au/RN52B75Q?ID=68FE71F6-22C1-4DA9-A932-9E75D41D5DC7&noleft=1),
			(5, 'Global Poverty', 'Against Malaria Foundation', https://www.acnc.gov.au/RN52B75Q?ID=24AA95A2-8109-4020-8974-4730CCD6DF52&noleft=1),
			(6, 'Youth At Risk', 'Streetwork Incorporated', https://www.acnc.gov.au/RN52B75Q?ID=F753AA4B-372F-43A7-BE2A-B44D3AAC0CCF&noleft=1);
		""")
        conn.commit()
        cur.execute("select * from cause")
        for row in cur:
            item_count += 1
            logger.info(row)

    conn.commit()

    return "Added %d items from RDS table" % (item_count)


def lambda_handler(event, context):
    message = ""

    if event['createAndPopulateCause'] == True:
        message = createAndPopulateCause()

    return message
