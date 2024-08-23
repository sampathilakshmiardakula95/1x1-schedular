const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor', required: true },
    date: { type: Date, required: true },
    duration: { type: Number, required: true }, // in minutes
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
