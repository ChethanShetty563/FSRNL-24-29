// const express = require('express');
// const postCtrl = require('../controllers/post.controller');
// const authMiddleware = require('../middlewares/auth.middleware');

// const router = express.Router();

// router.post('/api/posts/new/:userId', authMiddleware.verifyToken, postCtrl.createPost);

// module.exports = router;

const express = require('express');
const postCtrl = require('../controllers/post.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/api/posts/new/:userId', authMiddleware.verfyToken, postCtrl.createPost);

router.route('/api/posts/photo/:postId').get(postCtrl.photo);

router.route('/api/posts/by/:userId').get(authMiddleware.verifyToken, postCtrl.listByUser);

router.route('/api/posts/feed/:userId').get(authMiddleware.verifyToken, postCtrl.listNewsFeed);

router.route('/api/posts/like').put(authMiddleware.verifyToken, postCtrl.like);
router.route('/api/posts/unlike').put(authMiddleware.verifyToken, postCtrl.unlike);

router.route('/api/posts/comment').put(authMiddleware.verifyToken, postCtrl.comment);
router.route('/api/posts/uncomment').put(authMiddleware.verifyToken, postCtrl.uncomment);

router.route('/api/posts/:postId').delete(authMiddleware.verifyToken, postCtrl.isPoster, postCtrl.remove);

module.exports = router;
