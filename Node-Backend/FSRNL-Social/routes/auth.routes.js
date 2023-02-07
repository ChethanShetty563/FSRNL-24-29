const express = require('express');
const authCtrl = require('../controllers/auth.controller');

const router = express.Router();

router.post('/api/auth/signin', authCtrl.signin);
router.post('/api/auth/signout', authCtrl.signout);

module.exports = router;
