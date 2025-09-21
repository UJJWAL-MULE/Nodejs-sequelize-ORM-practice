// const { DataTypes } = require("sequelize");
// const sequelize = require("./index");

module.exports = (sequelize ,DataTypes) => {
sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue: "pawar",
      // allowNull defaults to true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
   
  },
  {
    // Other model options go here
    tableName: "users",
  }
);

}
