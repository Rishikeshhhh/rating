import React, { useState } from 'react';

const Rating = ({ initialRating, maxRating, onRatingChange }) => {
    const [rating, setRating] = useState(initialRating);

    const handleClick = (newRating) => {
        setRating(newRating);
        onRatingChange(newRating);
    };

    return (
        <div className="rating">
            {[...Array(maxRating)].map((_, index) => (
                <span
                    key={index}
                    onClick={() => handleClick(index + 1)}
                >
                    *
                </span>
            ))}
        </div>
    );
};

export default Rating;
