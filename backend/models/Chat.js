const mongoose = require('mongoose')
var Schema = mongoose.Schema

const ChatSchema = new Schema({
  conversation: {
    type: [Schema.Types.Mixed]
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide user']
  },
}, { timestamps: true } )

module.exports = mongoose.model('Chat', ChatSchema)