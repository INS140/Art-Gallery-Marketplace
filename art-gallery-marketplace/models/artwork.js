// Require mongoose
const mongoose = require('mongoose');
// Creating shorthand for the Schema constructor
const { Schema } = mongoose;

// Schema
const artworkSchema = new Schema({
  id: { 
    type: Number
   },
  title: {
    type: String,
    required: true
  },
  pic: {
    type: String, 
    required: true
  },
  artist: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Artist'
  },
  description:{
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  year: {
    type: Date 
  },
  style: { 
    type: String,
    required: true 
  },
  size: { 
    type: Number,
    required: true 
  },
  sold: { 
    Boolean },
  copies: { 
    Number, required: true 
  },
    
})

// Helper Methods
artworkSchema.methods.getArtworkBy = function () {
  return `This ${this.title} was created by ${this.artist?.name}!`
};


// model and export 
const Artwork = mongoose.model('Artwork', artworkSchema)
module.exports = Artwork;


