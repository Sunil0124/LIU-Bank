module.exports = app => {
  const transactions = require("../controllers/transaction.controller.js");
  const router = require("express").Router();

  router.post("/", transactions.create);
  router.get("/account/:account_id", transactions.findByAccount);

  app.use("/api/transactions", router);
};
