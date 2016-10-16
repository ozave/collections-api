var mongoose = require('mongoose');
var CollectionsSchema = new mongoose.Schema({name: String,completed: Boolean,note: String,updated_at: { type: Date, default: Date.now },});
module.exports = mongoose.model('Collection', CollectionsSchema);