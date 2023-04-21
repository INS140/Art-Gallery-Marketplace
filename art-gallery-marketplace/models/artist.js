
// Require mongoose
const mongoose = require('mongoose');
// Creating shorthand for the Schema constructor
const {Schema} = mongoose;
const Artwork = require('./artwork.js')



// Schema
    const artistSchema = new mongoose.Schema({
        name: { type: String, required: true,            
        enum: ['Annie', 'Isaac', 'Lorraline', 'Mal', 'Zane'],
        },   
        phone_number:{ type: String, required: true },
        email: { type: String, required: true },
        image: { type: String, required: true },   
        style: { type: String, required: true },
        bio: { type:String, required: true }, 
        createdAt: { type: Date },
        updateAt: { type: Date }
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







