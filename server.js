const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { errorHandler } = require('../utils/errorHandler');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', require('../routes/authRoutes'));
app.use('/api/students', require('../routes/studentRoutes'));
app.use('/api/mentors', require('../routes/mentorRoutes'));
app.use('/api/schedules', require('../routes/scheduleRoutes'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
