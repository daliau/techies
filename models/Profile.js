const mongoose = require('mongoose');

// Define schema for profiles
const profileSchema = new mongoose.Schema({
    name: String,
    field: String,
    // Add other profile fields as needed
});

// Create model for profiles using the schema
const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
