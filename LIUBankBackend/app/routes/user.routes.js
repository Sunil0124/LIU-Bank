module.exports = (app) => {
  const users = require("../controllers/user.controller");
  const router = require("express").Router();

  router.post("/signup", users.register);  // frontend POSTs to /api/auth/signup
  router.post("/login", users.login);      // frontend POSTs to /api/auth/login

  app.use("/api/auth", router);
};
