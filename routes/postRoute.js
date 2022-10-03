const express = require('express')
const router = express.Router();
const postController = require('../controllers/postController')
const postTagController = require('../controllers/postTagController')
const tagController = require('../controllers/tagController') 
const imageController = require('../controllers/imageController') 
const videoController = require('../controllers/videoController') 
const commentController = require('../controllers/commentController')
const ttController = require('../controllers/ttController')
const employeeController  = require('../controllers/employeeController')




//POST routes
router.post('/createPost',postController.createPost)
router.get('/getPost',postController.getAllPOST)



//TAGS ROUTES
router.post('/createTags',tagController.createTags)
router.get('/getTags',tagController.getAllTags)


//POST_TAG ROUTES
router.post('/createPostTag',postTagController.createPostTag)
router.get('/GETPostTag',postTagController.getAllPostTags)

//IMAGE ROUTES
router.post('/createImage',imageController.createImages)
router.get('/GETImage',imageController.getAllImage)


//VIDEO ROUTES
router.post('/createVideo',videoController.createVideo)
router.get('/getAllVideo',videoController.getAllVideo)

//COMMENT ROUTES
router.post('/createComment',commentController.createComment)
router.get('/getAllComment',commentController.getAllComment)

//tag_taggable ROUTES
router.post('/createTag_Taggable_ID',ttController.createTag_Taggable_ID)
router.get('/getAllTags',ttController.getAllTags)

//CREATE EMPLOYEE
router.post('/createEmployee',employeeController.createEmployee)
router.get('/getEmployee',employeeController.getEmployee)


module.exports = router