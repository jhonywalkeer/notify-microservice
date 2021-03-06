const config = require("./config");
const helper = require("./services/helper.service");
const notification = require("./services/notification.service");

const smsConsumer = helper.createConsumer(
  config.aws.queueUrls.sms,
  10,
  notification.sms
);
smsConsumer.on("error", (err) => {
  console.error(err.message);
});
smsConsumer.on("processing_error", (err) => {
  console.error(err.message);
});
smsConsumer.on("timeout_error", (err) => {
  console.error(err.message);
});
smsConsumer.start();

const emailConsumer = helper.createConsumer(
  config.aws.queueUrls.email,
  10,
  notification.email
);
emailConsumer.on("error", (err) => {
  console.error(err.message);
});
emailConsumer.on("processing_error", (err) => {
  console.error(err.message);
});
emailConsumer.on("timeout_error", (err) => {
  console.error(err.message);
});
emailConsumer.start();

const whatsappConsumer = helper.createConsumer(
  config.aws.queueUrls.whatsapp,
  10,
  notification.whatsapp
);
whatsappConsumer.on("error", (err) => {
  console.error(err.message);
});
whatsappConsumer.on("processing_error", (err) => {
  console.error(err.message);
});
whatsappConsumer.on("timeout_error", (err) => {
  console.error(err.message);
});
whatsappConsumer.start();
