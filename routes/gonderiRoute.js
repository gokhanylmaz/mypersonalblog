const express = require('express');
const gonderiController = require('../controllers/gonderiController');
const router = express.Router();

router.route("/").get(gonderiController.getAllGonderis);
router.route("/:id").get(gonderiController.getAGonderi);




module.exports = router;