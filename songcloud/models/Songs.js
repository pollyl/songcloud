var mongoose = require('mongoose');

var SongSchema = new mongoose.Schema(

{songName: String,
 artistName: String,
 songID: mongoose.Schema.Types.ObjectId,
 defaultKey: String,
 defaultBPM: Number,
 tags: [String],
 author: String,
 dateCreated: Date,
 lastEdit: Date,
 verified: {status:: String, verifiedBy: String}, //quality control fields - superfluous fields like these dont have to be populated yet but we can dream for future
 associatedFilePaths: 
 	{
 		audioFile: String,
 		abletonLiveFile: String
 	},
 notesFilePath: String,
 setsUsed: [String], //enumerated
 segments: //enumerated - list in sequence
 	[
 		{
	 		identifier: String, 	//stanza type identifier	
	 		superline: [
					 		{
					 			ChordLine: [String, Number], //each element corresponds to an index in spaceIndex field
					 			SpaceIndex: [Number, Number],
					 		 	LyricLine: String
					 		}
				 		]
	 	}
	]
 }
);

mongoose.model('song', SongSchema);