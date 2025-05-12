module.exports = (sequelize, DataTypes) => {
  return sequelize.define("account", {
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    account_type: { type: DataTypes.ENUM("checking", "savings"), allowNull: false },
    balance: { type: DataTypes.DECIMAL(10, 2), defaultValue: 0.00 }
  });
};