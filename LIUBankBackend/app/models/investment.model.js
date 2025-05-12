module.exports = (sequelize, DataTypes) => {
  return sequelize.define("investment", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    investment_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("active", "matured"),
      defaultValue: "active"
    }
  });
};
