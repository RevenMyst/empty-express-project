const express = require('express');

const router = express.Router();


const userCtrl = require('../controllers/users')

router.post('/signup',userCtrl.signup);
router.post('/login',userCtrl.login);
router.get('/check',userCtrl.check);


module.exports = router;