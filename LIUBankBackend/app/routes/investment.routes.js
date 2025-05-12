module.exports = app => {
  const investments = require("../controllers/investment.controller.js");
  const auth = require("../middleware/auth");
  const router = require("express").Router();

  router.post("/", auth, investments.createInvestment);
  router.get("/user/:user_id", auth, investments.getUserInvestments);

  app.use("/api/investments", router); // ✅ belongs here
};
