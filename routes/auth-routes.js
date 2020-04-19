const router = require('express').Router();

router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
})

router.get('/google', (req, res) => {
    // Handle with passport
    res.send('logging in with google');
})

module.exports = router;