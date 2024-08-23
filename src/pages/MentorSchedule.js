import React, { useEffect, useState } from 'react';
import { getSchedules } from '../services/scheduleService';

const MentorSchedule = () => {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        const fetchSchedules = async () => {
            const data = await getSchedules();
            setSchedules(data);
        };
        fetchSchedules();
    }, []);

    return (
        <div>
            <h2>Mentor Schedule</h2>
            {schedules.length > 0 ? (
                <ul>
                    {schedules.map((schedule) => (
                        <li key={schedule._id}>
                            {schedule.student.name} with {schedule.mentor.name} on {new Date(schedule.date).toLocaleString()} for {schedule.duration} minutes
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No schedules available</p>
            )}
        </div>
    );
};

export default MentorSchedule;
