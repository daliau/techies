const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  field: { type: String, required: true }
});

// Create a text index on the 'name' and 'field' fields
profileSchema.index({ name: 'text', field: 'text' });

const Profile = mongoose.model('Profile', profileSchema, 'user_profiles'); // Ensure the collection name is 'user_profiles'

module.exports = Profile;

