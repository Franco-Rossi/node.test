const express = require('express');
const router = express.Router();


// Routes
router.get('/', (req, res) => {
    res.render('index', { "title": "First website"});
})

router.get('/contact', (req, res) => {
    res.render('contact', { "title": "Contact page"});
})

router.get('/about', (req, res) => {
    res.render('about', { "title": "About page"});
})

module.exports = router;