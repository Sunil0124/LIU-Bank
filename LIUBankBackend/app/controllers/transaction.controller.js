const db = require("../models/db.js");

exports.create = async (req, res) => {
const Transaction = db.transaction;
const Account = db.account;
  try {
    const { account_id, type, amount, description } = req.body;
    const account = await Account.findByPk(account_id);
    if (!account) return res.status(404).json({ message: "Account not found" });

    let newBalance = type === "deposit"
      ? parseFloat(account.balance) + parseFloat(amount)
      : parseFloat(account.balance) - parseFloat(amount);

    if (type === "withdrawal" && newBalance < 0) {
      return res.status(400).json({ message: "Insufficient funds" });
    }

    const transaction = await Transaction.create({ account_id, type, amount, description });
    account.balance = newBalance;
    await account.save();

    res.status(201).json({ transaction, newBalance });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findByAccount = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({ where: { account_id: req.params.account_id } });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};