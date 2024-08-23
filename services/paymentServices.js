const { paymentRate } = require('./config/config');

exports.calculatePayment = (duration) => {
    if (paymentRate[duration]) {
        return paymentRate[duration];
    }
    throw new Error('Invalid duration');
};
