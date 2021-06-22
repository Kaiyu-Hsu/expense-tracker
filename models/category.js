const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema ({
  category_id: {
    type: Number,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Category', categorySchema)