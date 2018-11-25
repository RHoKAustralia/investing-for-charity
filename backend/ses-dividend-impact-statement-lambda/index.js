var aws = require('aws-sdk');
var ses = new aws.SES({
   region: 'us-west-2'
});

exports.handler = function(event, context) {
    console.log("Incoming: ", event);
   // var output = querystring.parse(event);

    var eParams = {
        Destination: {
            ToAddresses: ["liamraven@gmail.com"]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: "<!DOCTYPE html><head><style>.container{position:relative;text-align:center;color:white;}.bottom-left{position:absolute;bottom:8px;left:16px;}.top-left{position:absolute;top:8px;left:16px;}.top-right{position:absolute;top:8px;right:16px;}.bottom-right{position:absolute;bottom:8px;right:16px;}.centered{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}</style></head><body><h2>ImageText</h2><p>How to place text over an image:</p><div class='container'><img src='https://fournews-assets-prod-s3b-ew1-aws-c4-pml.s3.amazonaws.com/media/2017/12/snow_london_g_hd.jpg' alt='Snow' style='width:100%;'><div class='bottom-left'>BottomLeft</div><div class='top-left'>TopLeft</div><div class='top-right'>TopRight</div><div class='bottom-right'>BottomRight</div><div class='centered'>Centered</div></div></body></html>"
                },
            },
            Subject: {
                Data: "Email Subject!!!"
            }
        },
        Source: "liam@investingforcharity.org"
    };

    console.log('===SENDING EMAIL===');
    var email = ses.sendEmail(eParams, function(err, data){
        if(err) console.log(err);
        else {
            console.log("===EMAIL SENT===");
            console.log(data);


            console.log("EMAIL CODE END");
            console.log('EMAIL: ', email);
            context.succeed(event);

        }
    });

};
