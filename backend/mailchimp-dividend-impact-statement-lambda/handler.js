const AWS = require('aws-sdk');
const MailchimpAPI = require('mailchimp-api-v3');

AWS.config.update({
    region: "ap-southeast-2",
});

var secretsManager = new AWS.SecretsManager({
    region: "ap-southeast-2",
});

const secretKeyParams = {
    SecretId: "mailchimp_api_key"
};

exports.handler = (event) => {
    return new Promise((resolve, reject) => {
        secretsManager.getSecretValue(secretKeyParams, async (err, data) => {
            let mailchimpAPIKey;
            if (err) {
                console.log(err, err.stack);
            } else {
                const secrets = JSON.parse(data.SecretString);
                mailchimpAPIKey = secrets.mailchimp_api_key;
            }

            const mailchimp = new MailchimpAPI(mailchimpAPIKey);

            const mailchimpRequest = (method, endpoint, pathParams, body, query) => {
                return mailchimp.request({
                    method,
                    path: endpoint,
                    path_params: pathParams,
                    body,
                    query
                });
            }

            try {
                // Lists Request
                const listsRequestPathParams = '';
                const listsRequestBody = {
                    name: 'test list',
                    contact: {
                        company: 'Investing for charity',
                        address1: 'abc',
                        city: 'Sydney',
                        state: 'NSW',
                        zip: '2000',
                        country: 'Australia'
                    },
                    permission_reminder: 'false',
                    campaign_defaults: {
                        from_name: 'Matthew Fitzpatrick',
                        from_email: 'matthew.fitzpatrick.i4c@gmail.com',
                        subject: 'Investing for charity - impact statement',
                        language: 'english'
                    },
                    email_type_option: false,

                }
                const listsResponse = await mailchimpRequest('POST', '/lists', listsRequestPathParams, listsRequestBody);
                const listsId = listsResponse.id;

                // Merge Fields request
                // const mergeFields1RequestPathParams = '';
                // const mergeFields1RequestBody = {
                //     name: 'A_1',
                //     type: 'text',
                //     required: true,
                //     default_value: '150'
                // };
                // let mergeFields1Response = await mailchimpRequest('POST', `/lists/${listsId}/merge-fields`, mergeFields1RequestPathParams, mergeFields1RequestBody);

                // Members request
                const membersRequestPathParams = '';
                const membersRequestBody = {
                    email_address: 'vandermast9@gmail.com',
                    status: 'subscribed',
                    merge_fields: {}
                };
                let membersResponse = await mailchimpRequest('POST', `/lists/${listsId}/members`, membersRequestPathParams, membersRequestBody);

                // create campaign
                const campaignPathParams = '';
                const campaignBody = {
                    type: 'regular',
                    recipients: {
                        list_id: listsId
                    },
                    settings: {
                        template_id: 45305
                    },
                    subject_line: 'Investing for charity - impact statement',
                    from_name: 'Matthew Fitzpatrick',
                    title: 'test campaign',
                    winner_critieria: 'manual'

                };
                let campaignResponse = await mailchimpRequest('POST', `/campaigns`, campaignPathParams, campaignBody);
                const campaignId = campaignResponse.id;
                console.log('campaignId', campaignId);

                // check campaign
                const checkCampaignPathParams = {
                    campaignid: campaignId
                };
                let checkCampaignResponse = await mailchimpRequest('GET', `/campaigns/${campaignId}/send-checklist`, checkCampaignPathParams);
                console.log("checkCampaignResponse", checkCampaignResponse);

                // campaign send
                const campaignSendPathParams = {
                    campaignid: campaignId
                };

                let campaignSendResponse = await mailchimpRequest('POST', `/campaigns/${campaignId}/actions/send`, campaignSendPathParams);

                console.log("list response", listsResponse, "members response", membersResponse, "campaign response", campaignResponse, "campaignSend Response", campaignSendResponse);

                resolve({
                    statusCode: 200,
                    body: JSON.stringify('Hello from Lambda!', listsResponse),
                });
            }
            catch (error) {
                reject(error);
            }

        });
    });
};
