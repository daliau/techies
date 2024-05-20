const express = require('express');
const mongoose = require('mongoose');
const Profile = require('./models/Profile'); // Import the Profile model

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/techies', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Middleware to parse JSON requests
app.use(express.json());

// Profile search route
app.get('/search', async (req, res) => {
    try {
        const { q, initial } = req.query;

        let profiles;
        if (initial || q === '') {
            // Fetch some initial profiles if initial query parameter is true or if the search term is empty
            profiles = await Profile.find().limit(28); // For example, fetch the first 10 profiles
        } else if (q) {
            // Use regular expressions for flexible search
            const regex = new RegExp(q, 'i'); // 'i' for case-insensitive
            profiles = await Profile.find({ $or: [{ name: regex }, { field: regex }] });
        } else {
            profiles = [];
        }

        res.json(profiles);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});




