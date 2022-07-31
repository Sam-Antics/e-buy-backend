const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// creates the Category model based on Sequelize Model properties
class Category extends Model {}

Category.init(
  {
    // definition of table columns 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
