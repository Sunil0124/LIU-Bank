const db = require("../models/db.js");

exports.getDashboardData = async (req, res) => {
  const Dashboard = db.dashboard; // ✅ load only when needed

  try {
    const data = await Dashboard.findOne({ where: { user_id: req.params.user_id } });
    if (!data) return res.status(404).json({ message: "Dashboard not found" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createDashboard = async (req, res) => {
  const Dashboard = db.dashboard; // ✅ same here
  try {
    const dashboard = await Dashboard.create(req.body);
    res.status(201).json(dashboard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
