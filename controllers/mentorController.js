const Mentor = require('../models/Mentor');

exports.getMentors = async (req, res) => {
    try {
        const mentors = await Mentor.find();
        res.json(mentors);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.createMentor = async (req, res) => {
    try {
        const newMentor = new Mentor(req.body);
        const mentor = await newMentor.save();
        res.json(mentor);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
