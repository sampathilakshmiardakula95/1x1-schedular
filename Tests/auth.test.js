const request = require('supertest');
const app = require('./server');
const User = require('./models/User');

describe('Auth API', () => {
    beforeEach(async () => {
        await User.deleteMany();
    });

    it('should register a user', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({
                name: 'John Doe',
                email: 'john@example.com',
                password: '123456'
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });

    it('should login a user', async () => {
        const user = new User({
            name: 'John Doe',
            email: 'john@example.com',
            password: '123456'
        });
        await user.save();

        const res = await request(app)
            .post('/api/auth/login')
            .send({
                email: 'john@example.com',
                password: '123456'
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });
});
