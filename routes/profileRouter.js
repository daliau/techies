const express = require('express');
const Profile = require('./models/Profile'); // Assuming your schema/model are in a separate file
const router = express.Router();

// Search route
router.get('/search', async (req, res) => {
    try {
        const searchTerm = req.query.q;
        const profiles = await Profile.find({ $text: { $search: searchTerm } });
        res.json(profiles);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
