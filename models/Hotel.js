const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Hotel extends Model { }

Hotel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        contact_info: {
            type: DataTypes.STRING,
        },
        vacancy: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cat: {
            type: DataTypes.BOOLEAN,
        },
        dog: {
            type: DataTypes.BOOLEAN,
        },
        rabbit: {
            type: DataTypes.BOOLEAN,
        },
        other: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'hotel',
    }
);

module.exports = Hotel;
