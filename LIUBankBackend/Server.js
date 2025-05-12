require("dotenv").config();
console.log("Using DB config:", process.env.DB_HOST, process.env.DB_USER);
const express = require("express");
const cors = require("cors");
const db = require("./app/models/db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./app/routes/user.routes")(app);

app.get("/", (req, res) => {
  res.json({ message: "🚀 Welcome to LIU Bank API" });
});

const PORT = process.env.PORT || 8080;

db.sequelize.authenticate()
  .then(() => {
    console.log("✅ Connected to database");

    return db.sequelize.sync(); // remove `force` unless needed
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err.message);
    process.exit(1);
  });
