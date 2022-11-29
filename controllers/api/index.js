const router = require('express').Router();
const userRoutes = require('./userRoutes');
const petRoutes = require('./pet');
const hotelRoutes = require('./hotel');

router.use('/users', userRoutes);
router.use('/pet', petRoutes);
router.use('/hotel', hotelRoutes);

module.exports = router;
