const express = require('express')
const router = express.Router()


const userController = require('../controllers/userController')

router.post('/createUser',userController.createUser)
router.get('/getUser/:id',userController.getUser)
router.get('/getUser',userController.getAllUser)
router.put('/updateUser/:id',userController.updateUser)
router.delete('/deleteUser/:id',userController.deleteUser)

module.exports = router