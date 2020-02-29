## Getting Started
* An example of how to use express and AWS lambda

### Application
* install `serverless-http` to generate a lambda function from express app
* trigger database connection on every request because lambda function is not persistant
* at entry file, `export const handler = serverless(app);` or `module.exports.handler = serverless(app);`

### serverless.yml
* create se serverless.yml
* `service`: name of your lambda function
* `provider.region`: region to deploy
* `provider.stage`: `dev`, `stagin` etc. default to be `dev`
* `provider.runtime`: check your local runtime by `node -v`
* `provider.name`: set to `aws` to use AWS lambda
* `function.app.handler`:  the file to point to

### Install serverless
* `npm install serverless -g`: install `serverless` globally. If installation fail, try running with `sudo`
* visit aws IAM  and obtain a key-sercet pair. for more information, visit [here](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
* run `serverless config credentials --provider aws --key <key-value> --secret <secret-value>`
> To limit the Serverless Framework’s access your AWS account, follow these steps to create an IAM User and attach a custom JSON file policy to your new IAM User. This IAM User will have its own set of AWS Access Keys.
>
> 	1. Login to your AWS Account and go to the Identity & Access Management IAM)( page.
>
> 	2. Click on Users and then Add user. Enter a name in the first field to remind you this User is related to the Service you are deploying with the Serverless Framework, like serverless-servicename-agent. Enable Programmatic access by clicking the checkbox. Click Next to go through to the Permissions page. Click on Create policy. Select the JSON tab, and add a JSON file. You can use this gist as a guide.)

### Severless command
* `sls <command>`: you may interchange `serverlesss` and `sls`
* `serverless deploy`: to deploy to your aws `lambda` and `S3 bucket`
* `serverless deploy --stage <stage-name>`: deploy to `staging`, `production` etc.
* `serverless logs --startTime 5h`: view log at `dev`, may also specify `--stage <stage-name>`
