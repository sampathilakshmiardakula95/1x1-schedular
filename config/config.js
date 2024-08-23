module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'careercarve',
    jwtExpire: process.env.JWT_EXPIRE || '30d',
    paymentRate: {
        '30': 2000,
        '45': 3000,
        '60': 4000,
    }
};
