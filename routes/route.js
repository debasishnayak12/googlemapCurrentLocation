const express = require('express');
const {setUser,getUsers} = require('../controllers/usercontroller');
const router = express.Router();

router.post('/setlocation',setUser);
router.get('/getlocation',getUsers);

module.exports = router;