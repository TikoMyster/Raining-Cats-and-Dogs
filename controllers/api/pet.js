const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Pet } = require('../../models/index');

router.get('/', withAuth, (req, res) => {
    res.render('newpet', { login: req.isAuthenticated(), username: req.user.username });
});

router.post('/', withAuth, async (req, res) => {
    try {
        const {name, type, breed} = req.body;
        const owner_id = req.user.id;
        await Pet.create({
            name, type, breed, owner_id
        });
        res.redirect('/dashboard');
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
});

router.get('/pickup/:id', withAuth, async (req, res) => {
    try {
        await Pet.update({
            hotel_id : null
        }, {
            where: { id: req.params.id}
        });
        res.redirect('/dashboard');
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
});

module.exports = router;