const sequelize = require('../config/connection');
const { User, Pet, Hotel } = require('../models');

const userData = require('./userData.json');
// const petData = require('./petData.json');
const hotelData = require('./hotelData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    //add a user to test the login functionality
    await User.bulkCreate(userData, { individualHooks: true });
    await Hotel.bulkCreate(hotelData);
    process.exit(0);
};

seedDatabase();
