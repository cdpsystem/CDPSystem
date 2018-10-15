'use strict'

let express = require('express');
let router = express.Router();

//Controller
let CalendarController = require('../controllers/calendar');

//calendar
router.get('/saveEvent',CalendarController.saveEvent);
router.get('/getEventsByYearMonth/:year/:month',CalendarController.getEventsByYearMonth);

module.exports = router;