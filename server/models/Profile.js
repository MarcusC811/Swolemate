const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  profilePicture: {
    type: Image,
    
  },
  skills: [
    {
      type: String,
      trim: true,
    },
  ],

});

const Profile = model('Profile', profileSchema);

module.exports = Profile;