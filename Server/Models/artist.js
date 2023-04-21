// Require mongoose
const mongoose = require('mongoose');
// Creating shorthand for the Schema constructor
const { Schema } = mongoose;
const Artwork = require('./artwork.js')


// Schema
    const artistSchema = new Schema({
        name: { type: String, required: true },   
        phone:{ type: String, required: true },
        email: { type: String, required: true },
        image: String,   
        style: { type: String, required: true },
        bio: { type: String, required: true }
    }, {toJSON: { virtuals: true }})
    

    artistSchema.virtual('artworks', {
        ref: Artwork,
        localField: '_id',
        foreignField: 'artist'
    })
    
    artistSchema.post('findOneAndDelete', function() {
        Artwork.deleteMany({artist: this._conditions._id})
            .then(status => console.log(status))
    })

   
    // model and export 
    const Artist = mongoose.model('Artist', artistSchema)
    module.exports = Artist