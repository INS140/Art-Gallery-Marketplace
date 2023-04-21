// Require mongoose
const mongoose = require('mongoose');
// Creating shorthand for the Schema constructor
const { Schema } = mongoose;

// Schema
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
  })

// Helper Methods
artworkSchema.methods.getArtworkBy = function () {
  return `This ${this.title} was created by ${this.artist?.name}!`
};

// model
const Artwork = mongoose.model('Artwork', artworkSchema)

// find a specific artwork document by its ID and get its artist_id
Artwork.findById('ARTWORK_ID')
  .then((artwork) => {
    console.log(artwork.artist_id);
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = Artwork;


