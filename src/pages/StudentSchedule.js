import React, { useEffect, useState } from 'react';
import { getSchedules } from '../services/scheduleService';

const StudentSchedule = () => {
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
            <h2>Your Schedule</h2>
            {schedules.length > 0 ? (
                <ul>
                    {schedules.map((schedule) => (
                        <li key={schedule._id}>
                            With {schedule.mentor.name} on {new Date(schedule.date).toLocaleString()} for {schedule.duration} minutes
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No schedules available</p>
            )}
        </div>
    );
};

export default StudentSchedule;
