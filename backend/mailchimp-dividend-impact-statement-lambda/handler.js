const AWS = require('aws-sdk');
const MailchimpAPI = require('mailchimp-api-v3');

AWS.config.update({
    region: "ap-southeast-2",
});

const mailchimpAPIKey = 'fed93f27524a7c6378592543595f346a-us19';
const mailchimp = new MailchimpAPI(mailchimpAPIKey);

const mailchimpRequest = (method, endpoint, pathParams, body, query) => {
    return mailchimp.request({
        method,
        path: endpoint,
        path_params: pathParams,
        body,
        query
    }, callback);
}

exports.handler = async (event) => {

    try {
        const listsRequestPathParams = '';
        const listsRequestBody = {
            name: 'test list',
            contact: {
                company: 'Investing for charity',
                address: 'abc',
                city: 'Sydney',
                state: 'NSW',
                zip: '2000',
                country: 'Australia'
            },
            permission_reminder: false,
            campaign_defaults: false
        }

        let responseOne = await mailchimpRequest('POST', '/lists', listsRequestPathParams, listsRequestBody);

        // get list id

        // let responseTwo = await mailchimpRequest('POST', '/');
        // let responseThree = await mailchimpRequest('POST');

        // lists

        // list id, manage field

        // members

        // create campaign

        // campaign send

        const res = responseOne;

        return {
            statusCode: 200,
            body: JSON.stringify('Hello from Lambda!', res),
        };
    }
    catch(error) {
        return error;
    }

};
