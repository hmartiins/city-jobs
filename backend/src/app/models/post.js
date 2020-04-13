const mongoose = require('../../database');

const PostsSchema = new mongoose.Schema({
   title: {
      type: String,
      require: true,
   },
   description: {
      type: String,
      require: true,
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   }
});

const Posts = mongoose.model('Posts', PostsSchema);

module.exports = Posts;
