const request = require('supertest');
const app = require('./server');
const Mentor = require('./models/Mentor');

describe('Mentor API', () => {
    beforeEach(async () => {
        await Mentor.deleteMany();
    });

    it('should create a mentor', async () => {
        const res = await request(app)
            .post('/api/mentors')
            .send({
                name: 'Jane Doe',
                email: 'jane@example.com',
                areaOfInterest: ['Marketing', 'Finance'],
                availableSlots: [new Date()]
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('email', 'jane@example.com');
    });

    it('should get all mentors', async () => {
        await Mentor.create({
            name: 'Jane Doe',
            email: 'jane@example.com',
            areaOfInterest: ['Marketing', 'Finance'],
            availableSlots: [new Date()]
        });

        const res = await request(app).get('/api/mentors');

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
