const Schedule = require('./models/Schedule');
const Mentor = require('./models/Mentor');

exports.createSchedule = async (student, mentor, date, duration) => {
    const selectedMentor = await Mentor.findById(mentor);
    if (!selectedMentor) {
        throw new Error('Mentor not found');
    }

    const newSchedule = new Schedule({ student, mentor, date, duration });
    const schedule = await newSchedule.save();

    return schedule;
};

exports.getAllSchedules = async () => {
    const schedules = await Schedule.find()
        .populate('student')
        .populate('mentor');
    return schedules;
};
