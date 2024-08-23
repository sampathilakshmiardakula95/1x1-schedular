import React, { useEffect, useState } from 'react';
import MentorCard from './MentorCard';
import ScheduleForm from './ScheduleForm';
import { getMentors, createSchedule } from '../services/scheduleService';

const StudentDashboard = () => {
    const [mentors, setMentors] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMentors = async () => {
            const data = await getMentors();
            setMentors(data);
        };
        fetchMentors();
    }, []);

    const handleScheduleSubmit = async (scheduleData) => {
        const response = await createSchedule(scheduleData);
        setMessage(response.message);
    };

    return (
        <div>
            <h2>Student Dashboard</h2>
            {mentors.length > 0 ? (
                <div>
                    {mentors.map((mentor) => (
                        <MentorCard key={mentor._id} mentor={mentor} />
                    ))}
                    <ScheduleForm mentors={mentors} onSubmit={handleScheduleSubmit} />
                </div>
            ) : (
                <p>Loading mentors...</p>
            )}
            {message && <p>{message}</p>}
        </div>
    );
};

export default StudentDashboard;
