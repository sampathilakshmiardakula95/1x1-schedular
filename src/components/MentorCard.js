import React from 'react';

const MentorCard = ({ mentor }) => {
    return (
        <div className="mentor-card">
            <h3>{mentor.name}</h3>
            <p>Email: {mentor.email}</p>
            <p>Area of Interest: {mentor.areaOfInterest.join(', ')}</p>
        </div>
    );
};

export default MentorCard;
