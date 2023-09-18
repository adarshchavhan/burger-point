const passport = require('passport');
const { myProfile, logout, setAddress } = require('../contollers/authController');
const { auth } = require('../middlewares/auth');

const router = require('express').Router();

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: 'https://burgerpoint21.netlify.com'
}))

router.get('/me', auth, myProfile);
router.get('/logout', auth, logout);
router.post('/address', auth, setAddress);

module.exports = router;
