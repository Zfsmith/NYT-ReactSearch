var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticalSchema = new Schema({
	title:{
		type: String
	},
	date:{
		type: Date
	},
	url:{
		type: String
	}
});

var Artical = mongoose.model("Artical", ArticalSchema);

module.exports = Artical;