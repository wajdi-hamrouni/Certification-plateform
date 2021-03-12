const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://wajdidb:W@jdi123456@cerification-plateform.tgyfz.mongodb.net/certifDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("database connected")
});

module.exports = db