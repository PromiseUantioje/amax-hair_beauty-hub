const mongoose = require('mongoose');

const ScholarshipSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    school: { type: String, required: true },
    major: { type: String, required: true },
    gpa: { type: Number, required: true },
    graduationYear: { type: Number, required: true },
    statement: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Scholarship', ScholarshipSchema);
