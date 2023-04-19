
// Require mongoose
const mongoose = require('mongoose');
// Creating shorthand for the Schema constructor
const {Schema} = mongoose;
const Artwork = require('./artwork.js')
const artists = require('./seeders/artist_seed')
const Artist = require('./models/artist'); 

// Schema
    const artistSchema = new Schema({
        id: {type: Number},
        name: {
            type: String, required: true,            
            enum: ['Annie', 'Isaac', 'Lorraline', 'Mal', 'Zane']
        },   
        phone_number:{
            type: Text,
            required: true
        },
        email: {
            type: Text,
            required: true
        },
        image: {
            type: String, 
            required: true
        },   
        sytle: {
            type: String, 
            required: true
        },
        bio: {
            type:String, 
            required: true
        }, 
}, {toJSON: { virtuals: true }})
    
mongoose.connect('mongodb://127.0.0.1:27017/Art-Mart', { useNewUrlParser: true });

// insert the seed data
Artist.insertMany(artists)
  .then(() => console.log('Seed data inserted successfully'))
  .catch((err) => console.error(err))
  .finally(() => mongoose.disconnect());







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
