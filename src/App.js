import React, { useState } from 'react';
import Rating from './Rating.js';

const App = () => {
    const [rating, setRating] = useState(0);
    const handleRatingChange = (newRating) => { 
        setRating(newRating);
    };

    return (
        <div>
            <h1>Rate the movie:</h1>
            <Rating initialRating={rating} maxRating={10} onRatingChange={handleRatingChange} />
            <p>Select Rate: {rating}</p>
        </div>
    );
};

export default App;
