const { Model, DataTypes, BOOLEAN } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init(
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
        type: {
          type: DataTypes.VARCHAR,
          allowNull: false,
        }, 
        breed: {
          type: DataTypes.VARCHAR,
          allowNull: true,
        }, 
        owner_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'id',
          },
        },
        hotel_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'hotel',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pet',
      }
);

module.exports = Pet;