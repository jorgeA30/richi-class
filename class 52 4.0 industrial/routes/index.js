const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/id', usersController.getUserById);
router.post('/', usersController.createUser);

router.use('/users', require('./userRoutes'));
router.use('/products', require('./productRoutes'));
router.use('/51', require('./51Routes'));

module.exports = router;