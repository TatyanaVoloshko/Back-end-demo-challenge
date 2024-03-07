const mongoose = require('mongoose')
const moment = require("moment");

const schema = mongoose.Schema

const articleSchema = new schema({
  title: {
    type: String,
    required: true,
    minlength: 25,
  },

  text: {
    type: String,
    required: true,
    minlength: 100,
    },
  
    created_at: {
        type: Date,
        default: Date.now,
        get: function (createdAt) {
            return moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')
        }
  }
}, { timestamps: true })

module.exports = mongoose.model('Article', articleSchema)