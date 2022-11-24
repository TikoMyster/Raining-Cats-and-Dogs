const User = require('./User');
const Pet = require('./Pet');
const Hotel = require('./Hotel');


User.hasMany(Pet, {
    foreignKey: 'owner_id',
});

Pet.belongsTo(User, {
    foreignKey: 'owner_id'
});

Hotel.hasMany(Pet, {
    foreignKey: 'hotel_id'
});

Pet.belongsTo(Hotel, {
    foreignKey: 'hotel_id'
});

module.exports = { User, Pet, Hotel };
