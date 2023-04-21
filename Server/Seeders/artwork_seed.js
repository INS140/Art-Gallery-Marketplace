const mongoose = require('mongoose');
const Artwork = require('../models/artwork');
const artworkData = require('./artwork_data');

// Connect to the database
mongoose.connect(
    'mongodb://127.0.0.1:27017/Art-Mart',
    {
       useNewUrlParser: true,
       useUnifiedTopology: true,
    });

// Define a function to seed the database
async function seedDatabase() {
  try {
    // Delete all existing users in the database
    await Artwork.deleteMany();

    // Insert the artwork data from the seed file
    const artworks = await Artwork.insertMany(artworkData);

    console.log(`Seeded ${artworks.length} artworks into the database`);
  } catch (error) {
    console.error(error);
  } finally {
    // Disconnect from the database
    mongoose.disconnect();
  }
}

// Call the seed function to populate the database with data
seedDatabase();