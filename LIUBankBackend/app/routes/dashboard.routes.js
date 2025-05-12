module.exports = app => {
  const dashboard = require("../controllers/dashboard.controller.js");
  const router = require("express").Router();

  router.get("/:user_id", dashboard.getDashboardData);
  router.post("/", dashboard.createDashboard);

  app.use("/api/dashboard", router);
};