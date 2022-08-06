const {Modeil, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Tag extends Model{ }

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
    },
    {
        sequelize,
        timestamp: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag',
    }
);   
