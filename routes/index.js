const { Router } = require('express');
const postControllers = require('../controllers/post-routes');

const router = Router();

router.post('/createPost', postControllers.createPost);
router.get('/getAllPosts', postControllers.getAllPosts);
router.get('/getPostById', postControllers.getPostById);
router.put('/updatePost', postControllers.updatePost);
router.delete('/deletePost', postControllers.deletePost);

module.exports = router;