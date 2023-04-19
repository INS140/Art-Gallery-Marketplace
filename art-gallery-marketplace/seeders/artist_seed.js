const mongoose = require('mongoose');
const Artist = require('../models/artist');
const ArtistsData = require('./artist_data');

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
    await Artist.deleteMany();

    // Insert the users data from the seed file
    const artists = await Artist.insertMany(artistsData);

    console.log(`Seeded ${artists.length} artists into the database`);
  } catch (error) {
    console.error(error);
  } finally {
    // Disconnect from the database
    mongoose.disconnect();
  }
}

// Call the seed function to populate the database with data
seedDatabase();