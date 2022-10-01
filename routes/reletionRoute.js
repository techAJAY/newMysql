const express = require('express')
const router = express.Router();
const relationController = require('../controllers/reletionRoute')


//salary routes
router.get('/HASHoNE/:id',relationController.hashOne)




module.exports = router