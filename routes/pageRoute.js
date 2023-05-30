const express = require('express');
const pageController = require('../controllers/pageController')
const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/project').get(pageController.getProjectPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/admin').get(pageController.getAdminPage);



module.exports = router