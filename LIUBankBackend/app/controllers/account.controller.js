const db = require("../models/db.js"); 

const Account = db.account;

exports.create = async (req, res) => {
  try {
    const account = await Account.create(req.body);
    res.status(201).json(account);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findByUser = async (req, res) => {
  try {
    const accounts = await Account.findAll({ where: { user_id: req.params.user_id } });
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateBalance = async (req, res) => {
  try {
    const account = await Account.findByPk(req.params.id);
    if (!account) return res.status(404).json({ message: "Account not found" });
    account.balance = req.body.balance;
    await account.save();
    res.json(account);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
