const router = require('express').Router();
const { Op } = require('sequelize');
const withAuth = require('../../utils/auth');
const { Pet, Hotel } = require('../../models/index');

router.get('/:id', withAuth, async (req, res) => {
    try {
        const petData = await Pet.findAll({
            where: {
                [Op.and]: [{ hotel_id: { [Op.is]: null } }, { owner_id: req.user.id }]
            }
        });
        const petArr = petData.map(pet => pet.get({ plain: true }));
        const hotelData = await Hotel.findByPk(req.params.id);
        const hotel = hotelData.get({plain: true});
        res.render('bookhotel', { login: req.isAuthenticated(), username: req.user.username, petArr, hotel });
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});

router.post('/:id', withAuth, async (req, res) => {
    try {
        const hotel_id = req.params.id;
        await Pet.update({
            hotel_id
        }, {
            where: { name: req.body.name }
        });
        res.redirect('/dashboard');
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
});


module.exports = router;