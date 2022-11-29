const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Pet, Hotel } = require('../models/index');

router.get('/', withAuth, async (req, res) => {
    try {
        const petData = await Pet.findAll({
            where: { owner_id: req.user.id },
            include: { model: Hotel }
        });
        const petArr = petData.map((pet) => pet.get({ plain: true }));
        res.render('dashboard', { login: req.isAuthenticated(), username: req.user.username, petArr });
    } catch (err) {
        res.json({ message: 'something went wrong' });
    }
});

module.exports = router;