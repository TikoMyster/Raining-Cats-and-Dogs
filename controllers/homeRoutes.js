const router = require('express').Router();
const { Hotel } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
        // Get all hotels and JOIN with user data
        const hotelData = await Hotel.findAll();

        // Serialize data so the template can read it
        const hotels = hotelData.map((hotel) => hotel.get({ plain: true }));

        // Pass serialized data and session flag into template
        req.isAuthenticated()
            ? res.render('homepage', {
                hotels,
                login: req.isAuthenticated(),
                username: req.user.username
            })
            : res.render('homepage', {
                hotels,
                login: req.isAuthenticated()
            });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/hotel/:id', withAuth, async (req, res) => {
    try {
        const hotelData = await Hotel.findByPk(req.params.id);
        const hotel = hotelData.get({ plain: true });
        res.render('hotel', { hotel, login: req.isAuthenticated(), username: req.user.username });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.isAuthenticated()) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

module.exports = router;
