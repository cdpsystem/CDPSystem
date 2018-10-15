'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let eventSchema = new Schema({
	title: String,
	startDate: Date,
	endDate: Date,
	color: String
});

module.exports = mongoose.model('Event',eventSchema);