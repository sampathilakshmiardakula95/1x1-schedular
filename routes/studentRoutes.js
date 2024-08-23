const express = require('express');
const router = express.Router();
const { getStudents, createStudent } = require('./controllers/studentController');

router.route('/').get(getStudents).post(createStudent);

module.exports = router;
