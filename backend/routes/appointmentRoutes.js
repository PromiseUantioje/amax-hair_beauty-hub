const express = require('express');
const Appointment = require('../models/appointment');
const router = express.Router();

// Handle Appointment Form Submission
router.post('/', async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        const savedAppointment = await newAppointment.save();
        res.status(201).json(savedAppointment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
