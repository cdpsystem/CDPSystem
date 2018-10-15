'use strict'

let EventSchema = require('../models/event');

let Calendar = {
	saveEvent: async(req,res)=>{
		let event = new EventSchema;
		let eventResult;

		event.title="DUMMY",
		event.startDate = new Date(2018,9,12);
		event.endDate = new Date(2018,9,12);
		event.color = "red";

		try{ eventResult = await event.save(); }
		catch(err){ res.status(500).send({err : err.errors}); }		

		res.status(200).send({result: eventResult})
		return res;
	},

	getEventsByYearMonth:(req,res)=>{
		let year = req.params.year;
		let month = req.params.month-1;
		let searchParams = {};
		
		searchParams['startDate'] = { $gte: new Date(year,month,0), $lte:  new Date(year,month,31) };
		EventSchema.find(searchParams
		,(err,eventsFound)=>{
			if(err) return res.status(200).send({err: err.errors});
			if(eventsFound.length == 0) return res.status(404).send({eventsFound: 0});
			return res.status(200).send({eventsFound: eventsFound});
		})
	}
}

module.exports= Calendar;


