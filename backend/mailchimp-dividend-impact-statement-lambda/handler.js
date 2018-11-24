const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

AWS.config.update({
    region: "ap-southeast-2",
});

const dynamoDBParams = {
    ExpressionAttributeValues: {
        ":topic": {
            S: "PHRASE"
        }
    },
    FilterExpression: "contains (Subtitle, :topic)",
    ProjectionExpression: "Title, Subtitle",
    TableName: "EPISODES_TABLE"
};

exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };

    dynamodb.scan(dynamoDBParams, (err, data) => {
        if (err) {
            console.log("Error", err);
        } else {
            data.Items.forEach((element, index, array) => {
                console.log(element.Title.S + " (" + element.Subtitle.S + ")");
            });
        }
    });

    return response;
};
