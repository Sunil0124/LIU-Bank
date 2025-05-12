module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    accountNumber: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    ssn: {
      type: DataTypes.STRING(9),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  });
};
