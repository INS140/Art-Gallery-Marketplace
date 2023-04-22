//modules and globals
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

//Test CORS

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

//configuration and middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
mongoose.set({strictQuery: true})
try {
    mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log('DATABASE CONNECTED')
} catch (err) {
    console.log(err)
}

//controllers and routes
const artistsController = require('./Controllers/artists_controller')
app.use('/artists', artistsController)

const artworksController = require('./Controllers/artworks_controller')
app.use('/artworks', artworksController)

const commissionsController = require('./Controllers/commissions_controller')
app.use('/commissions', commissionsController)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Art-Mart API!' })
})

app.get('*', (req, res) => {
    res.status(404).json({ message: 'endpoint data not found' })
})

//listening for connections
app.listen(PORT, () => {
    console.log(`🎸 Rockin' on port: ${PORT}`)
})

module.exports = app