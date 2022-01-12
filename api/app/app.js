const express = require("express");
const app = express();
const { serve, setup } = require("swagger-ui-express");
const { load } = require("js-yaml");
const BodyParser = require("body-parser");
const notificationRoutes = require("./routes/notification.route");

const swaggerDocument = readFileSync(
  join(__dirname, "./docs/api-doc.yaml"),
  "utf8"
);

const swaggerData = load(swaggerDocument);

// api documentation
app.use("/docs", serve, setup(swaggerData));

app.use(BodyParser.json());
app.use("/api/v1/notify", notificationRoutes);

app.get("/health", (req, res) => {
  res.send({ status: "OK" });
});

module.exports = app;
