export const getMentors = async () => {
    const response = await fetch('/api/mentors');
    if (!response.ok) {
        throw new Error('Failed to fetch mentors');
    }
    return await response.json();
};

export const createSchedule = async (scheduleData) => {
    const response = await fetch('/api/schedules', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(scheduleData),
    });

    if (!response.ok) {
        throw new Error('Failed to create schedule');
    }

    return await response.json();
};

export const getSchedules = async () => {
    const response = await fetch('/api/schedules');
    if (!response.ok) {
        throw new Error('Failed to fetch schedules');
    }
    return await response.json();
};
