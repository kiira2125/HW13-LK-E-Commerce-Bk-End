const {Model, DataType} = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model{}

Category.init(
    {
        id: {  
            type: DataType.INTEGER,
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
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',

    }
  
  );

  module.exports = Category;