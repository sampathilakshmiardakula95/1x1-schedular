const Student = require('../models/Student');

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.createStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        const student = await newStudent.save();
        res.json(student);
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
