'use strict';

var Polls = require('../models/polls.js');

function PollHandler () {
	
	this.createPoll = (req, res) => {
		console.log(req.body);
		let title = req.body.title;
		let options = req.body.options;
		let optionsArray = options.replace(/\r/g, '').split('\n');
		
		var newPoll = new Polls({
			title: title,
			options: optionsArray
		});
		
		newPoll.save((err, newPoll) => {
			if (err) throw err;
			console.log('new entry created!')
		});
			
	};
	
	this.showPoll = (req, res) => {
		Polls
			.find({}, (err, users) => {
				if (err) { throw err; }
				console.log(users)
			});
	};

}

module.exports = PollHandler;
