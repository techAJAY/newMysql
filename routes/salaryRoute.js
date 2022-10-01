const express = require('express')
const router = express.Router();
const salaryController = require('../controllers/salaryController')


//salary routes
router.post('/createSalary',salaryController.createSalary)






module.exports = router