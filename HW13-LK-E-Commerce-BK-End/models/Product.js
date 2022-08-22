// going to import the crucial part of sequelize library
const {dash} = require{'inflection'};
const {Model, DataTypes} = require('sequelize');
// need to import database connection form config.js
const sequelize = require('../config/connection');

// initial the product model (table) by extending off sequelize's model class
class Product extends Model{ }

//setting up the fields & rules for Product model
Product.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            isDecimal: true,
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 11,
        validate: {
            isNumeric:true,
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id'
        }
    },
},

    {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);