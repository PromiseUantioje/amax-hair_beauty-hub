const express = require('express');
const Contact = require('../models/contact');
const router = express.Router();

// Handle Appointment Form Submission
router.post('/', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
