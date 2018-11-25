const { Client } = require('pg');

let sqlquery = `
-- Donation per donor per eofy per cause
select donors.donorid,
      dd.causeid,
      donorWeight.donorWeight,
      causes.causename,
      totaleofy.balance                                                       as totateofy,
      donorWeight.donorWeight * totaleofy.balance                             as amountThisFY,
      donors.disbursement,
      donors.disbursement * donorWeight.donorWeight * totaleofy.balance / 100 as donationThisYear,
      donors.disbursement * donorWeight.donorWeight * totaleofy.balance * allocation /
      10000                                                                   as donationThisYearPerCause,
      donors.disbursement * donorWeight.donorWeight * totaleofy.balance * allocation / 10000000 *
      NULLIF(charityimpact.amount, 0)                                         as donationThisYearPerCause,
      charityimpact.unit
from donors
      join (select donations.donorid, sum(donations.amount / (select sum(amount) from donations)) as donorWeight
            from donations
            group by donations.donorid) donorWeight on donorWeight.donorid = donors.donorId
      join ((select balance from fundeofy order by fy desc limit 1)) totaleofy on TRUE
      join donordistribution dd on donors.donorid = dd.donorid
      join charityimpact on dd.causeid = charityimpact.causeid
      join causes on dd.causeid = causes.causeid
;`;

const client = new Client({
  user: 'investingforcharity',
  host: 'investingforcharity.cptpg6trvqxe.ap-southeast-2.rds.amazonaws.com',
  database: 'i4cdb',
  password: '<replace password>',
  port: 5432,
});

client.connect();

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return new Promise(resolve => {
    client.query(sqlquery, (err, res) => {
      console.log(err, res);

      const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!', res),
      };

      context.succeed('Success');
      resolve(response);
    });
  });
};
