const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    areaOfInterest: { type: String, required: true },
    preferredMentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' },
});

module.exports = mongoose.model('Student', StudentSchema);
