var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  numberPost: String,
  datePost: String,
  forPost: String,
  soderzhPost: String,
  fiootprPost: String
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
