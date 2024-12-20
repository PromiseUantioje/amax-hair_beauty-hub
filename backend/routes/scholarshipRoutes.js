const express = require('express');
const Scholarship = require('../models/scholarship');
const router = express.Router();

// Handle Scholarship Form Submission
router.post('/', async (req, res) => {
    try {
        const newScholarship = new Scholarship(req.body);
        const savedScholarship = await newScholarship.save();
        res.status(201).json(savedScholarship);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
