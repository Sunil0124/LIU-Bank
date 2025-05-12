module.exports = app => {
  const accounts = require("../controllers/account.controller.js");
  const auth = require("../middleware/auth");
  const router = require("express").Router();

  router.post("/", auth, accounts.create);
  router.get("/user/:user_id", auth, accounts.findByUser);
  router.put("/:id/balance", auth, accounts.updateBalance);

  app.use("/api/accounts", router);
};