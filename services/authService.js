const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const { jwtSecret, jwtExpire } = require('./config/config');

exports.registerUser = async (name, email, password) => {
    let user = await User.findOne({ email });

    if (user) {
        throw new Error('User already exists');
    }

    user = new User({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, jwtSecret, { expiresIn: jwtExpire });

    return token;
};

exports.loginUser = async (email, password) => {
    let user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid Credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Invalid Credentials');
    }

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, jwtSecret, { expiresIn: jwtExpire });

    return token;
};
