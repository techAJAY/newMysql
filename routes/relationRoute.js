const express = require('express')
const router = express.Router();
const relationController = require('../controllers/relationController')


//one TO one and one to many routes
router.get('/HASHoNE/:id',relationController.hashOne)
router.get('/BelongsTo/:id',relationController.BelongsTo)

//MANY TO MAny routes
router.get('/manyToMany',relationController.manyToMany)

//polymorphic ONE TO MANY
router.get('/PolymorphicHashMany',relationController.PolymorphicHashMany)

//polymorphic ONE TO MANY
router.get('/PolymorphicManyToMany',relationController.PolymorphicManyToMany)



module.exports = router