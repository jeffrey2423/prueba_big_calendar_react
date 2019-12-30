const { Router } = require('express');
const router = Router();

const calendarController = require('../controllers/calendar.controller');

router.route('/')
    .get(calendarController.getEvents)


module.exports = router;