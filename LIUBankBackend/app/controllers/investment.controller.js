const db = require("../models/db.js"); 

const Investment = db.investment;

exports.createInvestment = async (req, res) => {
  try {
    const investment = await Investment.create(req.body);
    res.status(201).json(investment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserInvestments = async (req, res) => {
  try {
    const investments = await Investment.findAll({ where: { user_id: req.params.user_id } });
    res.json(investments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};