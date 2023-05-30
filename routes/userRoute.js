const express = require('express');
const userController = require('../controllers/userController');
const gonderiController = require('../controllers/gonderiController');
const router = express.Router();
const middleware = require('../middleware/authMiddleWare')

router.route("/gonderiolustur").post(gonderiController.createGonderi)
router.route("/login").post(userController.loginUser);
router.route("/dashboard").get(middleware.authanticateToken, userController.getDashboardPage);

module.exports = router;