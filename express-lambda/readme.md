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
> Follow these steps to create an IAM user for the Serverless Framework:
>
> 	1. Login to your AWS account and go to the Identity & Access Management (IAM) page.
>
> 	2. Click on Users and then Add user. Enter a name in the first field to remind you this User is related to the Serverless Framework, like serverless-admin. Enable Programmatic access by clicking the checkbox. Click Next to go through to the Permissions page. Click on Attach existing policies directly. Search for and select AdministratorAccess then click Next: Review. Check to make sure everything looks good and click Create user.
>
> 	3. View and copy the API Key & Secret to a temporary place. You'll need it in the next step.

### Severless command
* `sls <command>`: you may interchange `serverlesss` and `sls`
* `serverless deploy`: to deploy to your aws `lambda` and `S3 bucket`
* `serverless deploy --stage <stage-name>`: deploy to `staging`, `production` etc.
* `serverless logs --startTime 5h`: view log at `dev`, may also specify `--stage <stage-name>`
