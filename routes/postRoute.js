const express = require('express')
const router = express.Router();
const postController = require('../controllers/postController')
const postTagController = require('../controllers/postTagController')
const tagController = require('../controllers/tagController')



//POST routes
router.post('/createPost',postController.createPost)
router.get('/getPost',postController.getAllPOST)



//TAGS ROUTE
router.post('/createTags',tagController.createTags)
router.get('/getTags',tagController.getAllTags)


//POST_TAG ROUTE
router.post('/createPostTag',postTagController.createPostTag)
router.get('/GETPostTag',postTagController.getAllPostTags)




module.exports = router