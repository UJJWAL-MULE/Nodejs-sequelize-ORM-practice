// const { DataTypes } = require("sequelize");
// const sequelize = require("./index");

module.exports = (sequelize ,DataTypes) => {sequelize.define(
  "contact",
  {
    // Model attributes are defined here
    phoneNumner: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
    },
    CurrentAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PermanentAddress: {
      type: DataTypes.STRING,
      defaultValue: "pune",
      // allowNull defaults to true
    },
    
  },
  {
    // Other model options go here
    tableName: "contacts",
  }
);
}

