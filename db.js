const mongoose = require('mongoose')

var mongoURL = 'mongodb+srv://admin1:12345@cluster0.ql3bs.mongodb.net/pizza-app'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false})

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('Mongo DB connection successful')
})

db.on('error', ()=>{
    console.log('Mongo DB connection failed')
})

module.exports = mongoose