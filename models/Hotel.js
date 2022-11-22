const { Model, DataTypes, BOOLEAN } = require('sequelize');
const sequelize = require('../config/connection');

class Hotel extends Model {}

Hotel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.VARCHAR,
            allowNull: false,
        },
        addres: {
            type: DataTypes.VARCHAR,
            allowNull: false,
        },
        description: {
            type: DataTypes.VARCHAR,
          },
        contact_info: {
            type: DataTypes.VARCHAR,
            allowNull: true,
        },
        vacancy: {
            type: DataTypes.BOOLEAN,
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
