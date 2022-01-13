## 💻 Project summary

This project is a highly scalable micro-service to handle all the notifications (Email/SMS/WhatsApp) that you would require to schedule for contact from your small-business. It uses Amazon's SQS queuing service, SendGrid's email API and Twilio WhatsApp and SMS API to schedule notifications. Support would be added for other service-providers as the project evolves.

## 🚩 Features

- Simple/Bulk WhatsApp notification through a single API call.
- Simple/Bulk SMS notification through a single API call.
- Simple/Bulk rich text Email through a single API call.
- Rate limiter for streamlining bulk notification requests.

## 🛠 Technologies

Project was built using **Node.js**, AWS Services, Docker and the following dependencies:

- **[AWS SDK](https://www.npmjs.com/package/aws-sdk)** - Develop and deploy applications with the AWS SDK for JavaScript. The SDK provides first-class TypeScript support and makes it easy to call AWS services using idiomatic JavaScript APIs to build Node. js, web and mobile web apps.

- **[dotenv](https://www.npmjs.com/package/dotenv)** - It is a zero dependency module that loads environment variables from an .env file into process.env. The configuration storage in the environment separate from the code is based on The Twelve-Factor App methodology.

- **[JS Yaml](https://www.npmjs.com/package/js-yaml)** - Helps javascript to read yaml files and consequently render them more easily.

- **[Sendgird Mail](https://www.npmjs.com/package/@sendgrid/mail)** - This is a dedicated service for interaction with the mail endpoint of the SendGrid v3 API.

- **[SQS Consumer](https://www.npmjs.com/package/sqs-consumer)** - Build SQS-based applications without the boilerplate. Just define an async function that handles the SQS message processing.

- **[Twilio](https://www.npmjs.com/package/twilio)** - Package to interact with the Twilio api to send messages by whatssap and SMS

## 🔖 How to use

First of all..

- Access and [configure SendGrid](https://sendgrid.com/solutions/email-api/), then generate an API key

- Access and [configure Twilio](https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account), register a number, generate API key and setup SMS and WhatsApp.
- Access and [configure AWS SQS](https://docs.aws.amazon.com/pt_br/sdk-for-javascript/v2/developer-guide/sqs-examples-send-receive-messages.html)
- [Install Docker](https://docs.docker.com/engine/install/)
- Clone this project

```bash
$ git clone https://github.com/jhonywalkeer/notification-microservice.git
$ cd notification-microservice

```

Now, after configure...

- Create environment file

```bash
vim .env
```

Provide all the values as specified in `sample_env.sh`

- Start the micro-service

```
$ sudo docker-compose up -d
```

The API has 3 routes, where you can learn more about them in its documentation in swagger that is generated when running the microservice

| Method | Route            |
| ------ | ---------------- |
| POST   | /notify/email    |
| POST   | /notify/whatsapp |
| POST   | /notify/sms      |

## 📖 License

This project is under license from MIT. See the [LICENSE](LICENSE.md) file for more details.
