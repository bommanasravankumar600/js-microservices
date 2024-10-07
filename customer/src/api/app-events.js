const CustomerService = require("../services/customer-service");

module.exports = (app) => {
  const service = new CustomerService();
  app.use("/app-events", async (req, res, next) => {
    const { payload } = req.body;
    console.log("customer service received event");
    console.log("payload", payload);
    service.SubscribeEvents(payload);
    return res.status(200).json(payload);
  });
};
