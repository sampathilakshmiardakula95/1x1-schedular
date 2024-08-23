const mongoose = require('mongoose');

const MentorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    areaOfInterest: [{ type: String, required: true }],
    availableSlots: [{ type: Date, required: true }],
});

module.exports = mongoose.model('Mentor', MentorSchema);
