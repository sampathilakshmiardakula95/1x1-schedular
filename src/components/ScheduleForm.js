import React, { useState } from 'react';

const ScheduleForm = ({ mentors, onSubmit }) => {
    const [mentor, setMentor] = useState('');
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState(30);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ mentor, date, duration });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Mentor</label>
                <select value={mentor} onChange={(e) => setMentor(e.target.value)}>
                    <option value="">Select Mentor</option>
                    {mentors.map((mentor) => (
                        <option key={mentor._id} value={mentor._id}>
                            {mentor.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Date</label>
                <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
                <label>Duration</label>
                <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                    <option value={30}>30 minutes</option>
                    <option value={45}>45 minutes</option>
                    <option value={60}>60 minutes</option>
                </select>
            </div>
            <button type="submit">Schedule</button>
        </form>
    );
};

export default ScheduleForm;
