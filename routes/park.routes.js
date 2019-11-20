const express = require('express')
const router = express.Router()
const park = require("../models/park.model");

// Aquí los endpoints
router.get('/', (req, res, next) => {
    res.render('parks/new-park')

});


router.post('/new-park', (req, res) => {
    console.log(req.body)
    park.create({
            name: req.body.name,
            description: req.body.description

        })
        .then(() => {
            res.redirect('/')
        })
});

module.exports = router