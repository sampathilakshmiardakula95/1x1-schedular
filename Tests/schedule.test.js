const request = require('supertest');
const app = require('./server');
const Schedule = require('./models/Schedule');
const Mentor = require('./models/Mentor');
const Student = require('./models/Student');

describe('Schedule API', () => {
    beforeEach(async () => {
        await Schedule.deleteMany();
        await Mentor.deleteMany();
        await Student.deleteMany();
    });

    it('should create a schedule', async () => {
        const mentor = await Mentor.create({
            name: 'Mentor Test',
            email: 'mentor@example.com',
            areaOfInterest: ['Marketing'],
            availableSlots: [new Date()]
        });

        const student = await Student.create({
            name: 'Student Test',
            email: 'student@example.com',
            areaOfInterest: 'Marketing'
        });

        const res = await request(app)
            .post('/api/schedules')
            .send({
                student: student._id,
                mentor: mentor._id,
                date: new Date(),
                duration: 30
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('mentor', mentor._id.toString());
    });

    it('should get all schedules', async () => {
        const res = await request(app).get('/api/schedules');

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
