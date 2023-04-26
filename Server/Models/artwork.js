// Require mongoose
const mongoose = require('mongoose');
// Creating shorthand for the Schema constructor
const { Schema } = mongoose;

// Schema
<<<<<<< HEAD:art-gallery-marketplace/models/artwork.js
const artworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pic: { type: String, required: true },
  artist: { type: String, required: true },
  artist_id: { type: String, required: true },
  description:{ type: String, required: true },
  price: { type: String,   required: true },
  year: { type: Date  },
  style: { type: String },
  size: { type: String,   required: true },
  sold: { Boolean },
  copies: { Number },
=======
const artworkSchema = new Schema({
  title: { type: String, required: true },
  pic: { type: String, required: true },
  artist: { type: Schema.Types.ObjectId,
    required: true,
    ref: 'Artist'
  },
  description:{ type: String, required: true },
  price: { type: Number, required: true },
  year: Date,
  style: String,
  size: { type: String, required: true },
  sold: Boolean,
  copies: Number,
>>>>>>> e1f0feba33d44408ebc145540d772d4d83d1b664:Server/Models/artwork.js
  })

// Helper Methods
artworkSchema.methods.getArtworkBy = function () {
  return `This ${this.title} was created by ${this.artist?.name}!`
};

// model
const Artwork = mongoose.model('Artwork', artworkSchema)
<<<<<<< HEAD:art-gallery-marketplace/models/artwork.js

// find a specific artwork document by its ID and get its artist_id
Artwork.findById('ARTWORK_ID')
  .then((artwork) => {
    console.log(artwork.artist_id);
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = Artwork;


=======
module.exports = Artwork;
>>>>>>> e1f0feba33d44408ebc145540d772d4d83d1b664:Server/Models/artwork.js
