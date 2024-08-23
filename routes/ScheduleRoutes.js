const express = require('express');
const router = express.Router();
const { createSchedule, getSchedules } = require('./controllers/scheduleController');

router.route('/').post(createSchedule).get(getSchedules);

module.exports = router;
