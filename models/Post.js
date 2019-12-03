const mongoose = require('mongoose')
const Schema = mongoose.Schema;


// Create Schema
const PostSchema = new Schema({
  name: {
    type: String,
    require: false
  },
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Post = mongoose.model('item', PostSchema)
