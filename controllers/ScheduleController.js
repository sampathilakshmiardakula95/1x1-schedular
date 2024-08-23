const Schedule = require('../models/Schedule');
const Mentor = require('../models/Mentor');

exports.createSchedule = async (req, res) => {
    try {
        const { student, mentor, date, duration } = req.body;

        const selectedMentor = await Mentor.findById(mentor);
        if (!selectedMentor) {
            return res.status(404).json({ msg: 'Mentor not found' });
        }

        const newSchedule = new Schedule({ student, mentor, date, duration });
        const schedule = await newSchedule.save();
        res.json(schedule);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.getSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find()
            .populate('student')
            .populate('mentor');
        res.json(schedules);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
