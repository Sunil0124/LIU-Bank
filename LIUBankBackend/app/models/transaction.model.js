module.exports = app => {
  const transactions = require("../controllers/transaction.controller.js");
  const auth = require("../middleware/auth");
  const router = require("express").Router();

  router.post("/", auth, transactions.create);
  router.get("/account/:account_id", auth, transactions.findByAccount);

  // ✅ Register route with Express
  //app.use("/api/transactions", router);
};
