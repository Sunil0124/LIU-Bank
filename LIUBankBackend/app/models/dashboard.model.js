module.exports = app => {
  const dashboard = require("../controllers/dashboard.controller.js");
  const auth = require("../middleware/auth");
  const router = require("express").Router();

  router.get("/:user_id", auth, dashboard.getDashboardData);
  router.post("/", auth, dashboard.createDashboard);

  //app.use("/api/dashboard", router);
};