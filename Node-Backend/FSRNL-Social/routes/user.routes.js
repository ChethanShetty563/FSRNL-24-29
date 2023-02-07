const express = require('express');
const userCtrl = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.route('/api/users/register').post(userCtrl.createUser);

router.route('/api/users').get(userCtrl.getAllUsers);

router.get('/api/users/photo/:userId');
router.get('/api/photo/defaultphoto');

router.put('/api/users/follow', authMiddleware.verfyToken, userCtrl.addFollowing, userCtrl.addFollower);
router.put('/api/users/unfollow', authMiddleware.verfyToken);

router.route('/api/users/:userid').get(authMiddleware.verfyToken, userCtrl.getUserByID);
router.route('/api/users/:userid').put(authMiddleware.verfyToken, userCtrl.updateUser);
router.route('/api/users/:userid').delete(authMiddleware.verfyToken, userCtrl.deleteUser);

module.exports = router;
