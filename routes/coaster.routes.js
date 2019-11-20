const express = require('express')
const router = express.Router()
const coaster = require("../models/coaster.model");
const Parks = require("../models/park.model");

// Aquí los endpoints
router.get('/', (req, res, next) => {
    Parks.find()
        .then(parks => {
            res.render('coasters/new-coaster', {
                parks
            })
        })

});


router.post('/new-coaster', (req, res) => {
    console.log(req.body)
    coaster.create(
            req.body
        )
        .then(() => {
            res.redirect('/')
        })
});

router.get('/list', (req, res, next) => {
    coaster.find().populate('park')
        .then(coaster => {
            res.render('coasters/coasters-index', {
                coaster
            })
        })

});




module.exports = router