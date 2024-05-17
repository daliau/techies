const express = require('express');
const mongoose = require('mongoose');
const Profile = require('./models/Profile'); // Import the Profile model

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/profiles', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware to parse JSON requests
app.use(express.json());

// Profile search route
app.get('/search', async (req, res) => {
    try {
        const searchTerm = req.query.q;
        const profiles = await Profile.find({ $text: { $search: searchTerm } });
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
