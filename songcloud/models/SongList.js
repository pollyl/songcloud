var mongoose = require('mongoose');

var SongListSchema = new mongoose.Schema(

{
	"lastUpdate": String,
	"version": Number,
	"songs":
		[
			{"name": String,
			 "songID": String}
		]
}

mongoose.model('SongList', SongListSchema);