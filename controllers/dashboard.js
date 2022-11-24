const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    try {
        res.render('dashboard', { login: req.isAuthenticated(), username: req.user.username });
    } catch (err) {
        res.json({ message: 'something went wrong' });
    }
});

module.exports = router;