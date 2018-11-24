const { Client } = require('pg');

const client = new Client({
  user: 'investingforcharity',
  host: 'investingforcharity.cptpg6trvqxe.ap-southeast-2.rds.amazonaws.com',
  database: 'i4cdb',
  password: '<replace password>',
  port: 5432,
});
client.connect();

exports.handler = async (event, context) => {
  // return new Promise((res) => {
  //   const response = {
  //     statusCode: 200,
  //     body: JSON.stringify('Hello from Lambda!'),
  //   };

  //   setTimeout(() => {
  //     res(response);
  //   }, 1000)
  // })

  context.callbackWaitsForEmptyEventLoop = false;
  return new Promise(resolve => {
    client.query('SELECT NOW()', (err, res) => {
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
